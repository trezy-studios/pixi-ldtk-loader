// Module imports
import {
	DOMAdapter,
	Loader,
	type ResolvedAsset,
	Spritesheet,
	type SpritesheetData,
	type SpritesheetFrameData,
	Texture,
} from 'pixi.js'





// Local imports
import { type HostConfig } from './typedefs/HostConfig'
import { type LDTKEntity } from './typedefs/LDTKEntity'
import { type LDTKLevel } from './typedefs/LDTKLevel'
import { type LDTKLevelLayer } from './typedefs/LDTKLevelLayer'
import { type LDTKLevelLayerTile } from './typedefs/LDTKLevelLayerTile'
import { type LDTKObject } from './typedefs/LDTKObject'
import { type LDTKTileset } from './typedefs/LDTKTileset'
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import * as path from './helpers/path'





/** The root of all parsers. */
export abstract class BaseParser<Config extends HostConfig = HostConfig> {
	/**
	 * Generates a base object for sprite atlases.
	 *
	 * @param imageSrc The path to the image file.
	 * @param pixelHeight The pixel height of tiles in the tileset.
	 * @param pixelWidth The pixel width of tiles in the tileset.
	 * @returns The generated atlas base.
	 */
	generateBaseAtlas(
		imageSrc: string,
		pixelHeight: number,
		pixelWidth: number,
	): SpritesheetData {
		return {
			frames: {},
			meta: {
				format: 'RGBA8888',
				image: imageSrc,
				size: {
					h: pixelHeight,
					w: pixelWidth,
				},
				scale: '1',
			},
			animations: {},
		}
	}

	/**
	 * Generates a base tileset object.
	 *
	 * @param columnCount The number of columns in the tileset.
	 * @param id The ID of the tileset.
	 * @param rowCount The number of rows in the tileset.
	 * @param tileGridHeight The height of columns in the tileset.
	 * @param tileGridWidth The width of a tile grid cell.
	 * @returns The generated tileset base.
	 */
	generateBaseTileset(
		columnCount: number,
		id: number,
		rowCount: number,
		tileGridHeight: number,
		tileGridWidth: number,
	): LDTKTileset {
		return {
			id,
			meta: {
				columnCount,
				rowCount,
				tileCount: columnCount * rowCount,
			},
			spritesheet: null,
			tile: {
				height: tileGridHeight,
				width: tileGridWidth,
			},
		}
	}

	/**
	 * Creates an atlas frame from Ldtk tile data.
	 *
	 * @param column The grid-relative column of the tile.
	 * @param row The grid-relative row of the tile.
	 * @param tileGridSize The size of a tile grid cell.
	 * @returns The generated tile frame data.
	 */
	generateTileFrameData(
		column: number,
		row: number,
		tileGridSize: number,
	): SpritesheetFrameData {
		return {
			frame: {
				h: tileGridSize,
				w: tileGridSize,
				x: tileGridSize * column,
				y: tileGridSize * row,
			},
			sourceSize: {
				h: tileGridSize,
				w: tileGridSize,
			},
			spriteSourceSize: {
				h: tileGridSize,
				w: tileGridSize,
				x: 0,
				y: 0,
			},
		}
	}

	/**
	 * Retrieves the texture for a tile from a tileset.
	 *
	 * @param tileID The ID of the tile.
	 * @param tileset The tileset to retrieve the texture from.
	 * @returns The tile texture.
	 */
	getTileTextureFromTileset(
		tileID: number | string,
		tileset: LDTKTileset,
	): Texture {
		const compiledIDString = `${tileset.id}::${tileID}`
		return tileset.spritesheet!.textures[compiledIDString]
	}

	/**
	 * Parses a .ldtk file.
	 *
	 * @param asset The LDtk file asset.
	 * @param ldtkString The string represnetation of the LDtk file contents.
	 * @param loader The loader being used to load this asset.
	 * @returns The parsed LDtk object.
	 */
	async parse(
		asset: ResolvedAsset,
		ldtkString: string,
		loader: Loader,
	) {
		if (!asset.src) {
			throw new Error('Cannot read asset source.')
		}

		const ldtkJSON = this.toLDTKProject(ldtkString)

		const assetBasePath = asset.src.replace(path.basename(asset.src), '')

		const ldtkObject: LDTKObject<Config['LDTKProject']> = {
			levels: [],
			meta: {
				app: 'LDtk',
				original: ldtkJSON,
				version: ldtkJSON.appBuildId,
			},
			tilesets: await this.parseTilesets(
				assetBasePath,
				loader,
				ldtkJSON.defs.tilesets as Config['TilesetDefinition'][],
			),
		}

		ldtkObject.levels = await this.parseLevels(
			assetBasePath,
			ldtkJSON.levels,
			ldtkObject.tilesets,
		)

		return ldtkObject
	}

	/**
	 * Parses entities from LDtk source data.
	 *
	 * @param sourceData Entity data from LDtk source.
	 * @returns An array of parsed entities.
	 */
	parseEntities(sourceData: Config['EntityInstance'][]) {
		return sourceData.map(entityInstance => {
			const entity: LDTKEntity = {
				height: entityInstance.height,
				iid: entityInstance.iid,
				name: entityInstance.__identifier,
				position: {
					x: entityInstance.px[0],
					y: entityInstance.px[1],
				},
				tags: entityInstance.__tags,
				width: entityInstance.width,
			}

			entityInstance.fieldInstances.forEach(fieldInstance => {
				entity[fieldInstance.__identifier] = fieldInstance.__value
			})

			return entity
		})
	}

	/**
	 * Parses a layer from LDtk source data.
	 *
	 * @param sourceData Layer data from LDtk source.
	 * @param tilesets Tilesets that have been loaded from the LDtk source.
	 * @returns The parsed layer.
	 */
	parseLayer(
		sourceData: Config['LayerInstance'],
		tilesets: ParsedTilesetMap,
	): LDTKLevelLayer {
		const layer: LDTKLevelLayer = {
			iid: sourceData.iid,
			name: sourceData.__identifier,
		}

		if (['IntGrid', 'Tiles'].includes(sourceData.__type)) {
			if (!sourceData.__tilesetDefUid) {
				throw new Error('Tileset is missing its UID')
			}

			const tilesetID = sourceData.__tilesetDefUid
			const tileset = tilesets.get(tilesetID)

			if (!tileset) {
				throw new Error(`Missing tileset (id: ${tilesetID})`)
			}

			const tilesData = sourceData.autoLayerTiles.length
				? sourceData.autoLayerTiles
				: sourceData.gridTiles

			layer.tiles = this.parseTiles(
				tilesData,
				tileset,
			)
		} else if (sourceData.__type === 'Entities') {
			layer.entities = this.parseEntities(sourceData.entityInstances)
		}

		return layer
	}

	/**
	 * Parses a level from LDtk source data.
	 *
	 * @param sourceData Level data from the LDtk source.
	 * @param tilesets Tilesets that have been loaded from the LDtk source.
	 * @returns The parsed level.
	 */
	parseLayers(
		sourceData: (Config['LayerInstance'] | null)[],
		tilesets: ParsedTilesetMap,
	): LDTKLevelLayer[] {
		const layers = []

		let layerIndex = 0

		while (layerIndex < sourceData.length) {
			if (sourceData[layerIndex]) {
				const layer = this.parseLayer(
					sourceData[layerIndex]!,
					tilesets,
				)

				layers.unshift(layer)
				layerIndex += 1
			}
		}

		return layers
	}

	/**
	 * Parses a level from LDtk source data.
	 *
	 * @param assetBasePath The base path from which the level will be loaded.
	 * @param sourceData Level data from the LDtk source.
	 * @param tilesets Tilesets that have been loaded from the LDtk source.
	 * @returns The parsed level.
	 */
	async parseLevel(
		assetBasePath: string,
		sourceData: Config['Level'],
		tilesets: ParsedTilesetMap,
	) {
		const level: LDTKLevel = {
			layers: null,
			name: sourceData.identifier,
			worldPosition: {
				x: sourceData.worldX,
				y: sourceData.worldY,
			},
		}

		if (sourceData.fieldInstances) {
			sourceData.fieldInstances?.forEach(fieldInstance => {
				level[fieldInstance.__identifier] = fieldInstance.__value
			})
		}

		const adapter = DOMAdapter.get()

		if (sourceData.externalRelPath) {
			const levelSrc = path.join(assetBasePath, sourceData.externalRelPath)

			const levelResponse = await adapter.fetch(levelSrc)
			sourceData = await levelResponse.json()
		}

		if (sourceData.layerInstances) {
			level.layers = this.parseLayers(
				sourceData.layerInstances,
				tilesets,
			)
		}

		return level
	}

	/**
	 * Retrieves and parses levels from the LDtk source data.
	 *
	 * @param assetBasePath The base path from which levels will be loaded.
	 * @param sourceData LDtk source data.
	 * @param tilesets Tilesets that have already been loaded from the LDtk source.
	 * @returns An array of parsed levels.
	 */
	async parseLevels(
		assetBasePath: string,
		sourceData: Config['Level'][],
		tilesets: ParsedTilesetMap,
	): Promise<LDTKLevel[]> {
		const levels = []

		let levelIndex = 0
		while (levelIndex < sourceData.length) {
			levels.push(await this.parseLevel(
				assetBasePath,
				sourceData[levelIndex],
				tilesets,
			))

			levelIndex += 1
		}

		return levels
	}

	/**
	 * Parses tiles from LDtk source data.
	 *
	 * @param sourceData Tile data from LDtk source.
	 * @param tileset The layer's tileset.
	 * @returns An array of parsed tiles.
	 */
	parseTiles(
		sourceData: Config['TileInstance'][],
		tileset: LDTKTileset,
	): LDTKLevelLayerTile[] {
		return sourceData.map(tileData => {
			const flipBit = tileData.f
			const tileID = tileData.t
			const tilePositionX = tileData.px[0]
			const tilePositionY = tileData.px[1]

			return {
				alpha: tileData.a ?? 1,
				flipX: [1, 3].includes(flipBit),
				flipY: [2, 3].includes(flipBit),
				height: tileset.tile.height,
				id: tileID,
				position: {
					x: tilePositionX / tileset.tile.width,
					y: tilePositionY / tileset.tile.height,
				},
				size: {
					height: tileset.tile.height,
					width: tileset.tile.width,
				},
				texture: this.getTileTextureFromTileset(tileID, tileset),
				tilesetID: tileset.id,
				width: tileset.tile.width,
			}
		})
	}

	/**
	 * Parses a tileset from LDtk source data.
	 *
	 * @param assetBasePath The base path from which the tileset will be loaded.
	 * @param loader The Pixi loader.
	 * @param sourceData Tileset source data.
	 * @returns The parsed tileset.
	 */
	async parseTileset(
		assetBasePath: string,
		loader: Loader,
		sourceData: Config['TilesetDefinition'],
	): Promise<LDTKTileset | null> {
		if (!sourceData.relPath) {
			return null
		}

		const columnCount = sourceData.__cWid
		const rowCount = sourceData.__cHei
		const tilesetSrc = path.join(assetBasePath, sourceData.relPath)

		const texture = await loader.load({ src: tilesetSrc })

		const tileset = this.generateBaseTileset(
			columnCount,
			sourceData.uid,
			rowCount,
			sourceData.tileGridSize,
			sourceData.tileGridSize,
		)

		const atlas: SpritesheetData = this.generateBaseAtlas(
			tilesetSrc,
			sourceData.pxHei,
			sourceData.pxWid,
		)

		const totalTiles = sourceData.__cHei * sourceData.__cWid
		let tileIndex = 0

		while (tileIndex < totalTiles) {
			const column = tileIndex % columnCount
			const row = Math.floor(tileIndex / columnCount)

			atlas.frames[`${tileset.id}::${tileIndex}`] = this.generateTileFrameData(
				column,
				row,
				sourceData.tileGridSize,
			)

			tileIndex += 1
		}

		tileset.spritesheet = new Spritesheet(texture, atlas)
		await tileset.spritesheet.parse()

		return tileset
	}

	/**
	 * Retrieves and parses tilesets from LDtk source data.
	 *
	 * @param assetBasePath The base path from which tilesets will be loaded.
	 * @param loader The Pixi loader.
	 * @param sourceData LDtk source data.
	 * @returns A map of tilesets.
	 */
	async parseTilesets(
		assetBasePath: string,
		loader: Loader,
		sourceData: Config['TilesetDefinition'][],
	): Promise<ParsedTilesetMap> {
		const tilesets = new Map

		// Load tilesets
		let tilesetIndex = 0
		while (tilesetIndex < sourceData.length) {
			const tileset = await this.parseTileset(
				assetBasePath,
				loader,
				sourceData[tilesetIndex],
			)

			if (tileset) {
				tilesets.set(tileset.id, tileset)
			}

			tilesetIndex += 1
		}

		return tilesets
	}

	/** Converts a string to an LDtk project. */
	abstract toLDTKProject(ldtkString: string): Config['LDTKProject']
}
