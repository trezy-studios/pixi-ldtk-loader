// Module imports
import {
	Loader,
	Spritesheet,
	type SpritesheetData,
} from 'pixi.js'





// Local imports
import { generateBaseAtlas } from './helpers/generateBaseAtlas'
import { generateBaseTileset } from './helpers/generateBaseTileset'
import { generateTileFrameData } from './helpers/generateTileFrameData'
import { LDTKTileset } from './typedefs/LDTKTileset'
import path from 'path'
import { TilesetDefinition } from './quicktype'





// Types
type Config = {
	/** @description The base path from which the tileset will be loaded. */
	assetBasePath: string,

	/** @description The Pixi loader. */
	loader: Loader,

	/** @description Tileset source data. */
	sourceData: TilesetDefinition,
}





/**
 * Parses a tileset from LDtk source data.
 *
 * @param config All configs.
 * @returns The parsed tileset.
 */
export async function parseTileset(config: Config): Promise<LDTKTileset | null> {

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

	const tileset = generateBaseTileset({
		columnCount,
		id: sourceData.uid,
		rowCount,
		tileGridHeight: sourceData.tileGridSize,
		tileGridWidth: sourceData.tileGridSize,
	})

	const atlas: SpritesheetData = generateBaseAtlas({
		imageSrc: tilesetSrc,
		pixelHeight: sourceData.pxHei,
		pixelWidth: sourceData.pxWid,
	})

	const totalTiles = sourceData.__cHei * sourceData.__cWid
	let tileIndex = 0

	while (tileIndex < totalTiles) {
		const column = tileIndex % columnCount
		const row = Math.floor(tileIndex / columnCount)

		atlas.frames[`${tileset.id}::${tileIndex}`] = generateTileFrameData({
			column,
			row,
			tileGridSize: sourceData.tileGridSize,
		})

		tileIndex += 1
	}

	tileset.spritesheet = new Spritesheet(texture, atlas)
	await tileset.spritesheet.parse()

	return tileset
}
