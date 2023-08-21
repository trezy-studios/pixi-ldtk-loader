// Module imports
import { Spritesheet } from '@pixi/spritesheet'





// Local imports
import path from 'path'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Generates a base object for sprite atlases.
 *
 * @param {string} imageSrc The path to the image file.
 * @param {number} pixelHeight The pixel height of tiles in the tileset.
 * @param {number} pixelWidth The pixel width of tiles in the tileset.
 * @returns {import('@pixi/spritesheet').ISpritesheetData} The generated atlas base.
 */
function generateBaseAtlas(imageSrc, pixelHeight, pixelWidth) {
	return {
		frames: {},
		meta: {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
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
 * @param {number} id The ID of the tileset.
 * @param {number} columnCount The number of columns in the tileset.
 * @param {number} rowCount The number of rows in the tileset.
 * @param {number} tileGridHeight The height of columns in the tileset.
 * @param {number} tileGridWidth The width of a tile grid cell.
 * @returns {types.LDTKTileset} The generated tileset base.
 */
function generateBaseTileset(id, columnCount, rowCount, tileGridHeight, tileGridWidth) {
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
 * @param {number} tileGridSize The size of a tile grid cell.
 * @param {number} column The grid-relative column of the tile.
 * @param {number} row The grid-relative row of the tile.
 * @returns {import('@pixi/spritesheet').ISpritesheetFrameData} The generated tile frame data.
 */
function generateTileFrameData(tileGridSize, column, row) {
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
			// TODO: Remove these comments once https://github.com/pixijs/pixijs/pull/9595 has been merged.
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			h: tileGridSize,
			w: tileGridSize,
			x: 0,
			y: 0,
		},
	}
}

/**
 * Parses a tileset from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {string} config.assetBasePath The base path from which the tileset will be loaded.
 * @param {import('@pixi/assets').Loader} config.loader The Pixi loader.
 * @param {import('./ldtk-quicktype.js').TilesetDefinition} config.sourceData Tileset source data.
 * @returns {Promise<types.LDTKTileset | null>} The parsed tileset.
 */
export async function parseTileset(config) {
	const {
		assetBasePath,
		loader,
		sourceData,
	} = config

	if (!sourceData.relPath) {
		return null
	}

	const columnCount = sourceData.__cWid
	const rowCount = sourceData.__cHei
	const tilesetSrc = path.join(assetBasePath, sourceData.relPath)

	const texture = await loader.load({ src: tilesetSrc })

	const tileset = generateBaseTileset(sourceData.uid, columnCount, rowCount, sourceData.tileGridSize, sourceData.tileGridSize)

	/** @type {import('@pixi/spritesheet').ISpritesheetData} */
	const atlas = generateBaseAtlas(tilesetSrc, sourceData.pxHei, sourceData.pxWid)

	const totalTiles = sourceData.__cHei * sourceData.__cWid
	let tileIndex = 0

	while (tileIndex < totalTiles) {
		const column = tileIndex % columnCount
		const row = Math.floor(tileIndex / columnCount)

		atlas.frames[`${tileset.id}::${tileIndex}`] = generateTileFrameData(sourceData.tileGridSize, column, row)

		tileIndex += 1
	}

	tileset.spritesheet = new Spritesheet(texture, atlas)
	await tileset.spritesheet.parse()

	return tileset
}
