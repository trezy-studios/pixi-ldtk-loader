// Module imports
import { Spritesheet } from '@pixi/spritesheet'





// Local imports
import path from 'path'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





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

	const tileset = {
		id: sourceData.uid,
		meta: {
			columnCount,
			rowCount,
			tileCount: columnCount * rowCount,
		},
		spritesheet: null,
		tile: {
			height: sourceData.tileGridSize,
			width: sourceData.tileGridSize,
		},
	}

	/** @type {import('@pixi/spritesheet').ISpritesheetData} */
	const atlas = {
		frames: {},
		meta: {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			format: 'RGBA8888',
			image: tilesetSrc,
			size: {
				h: sourceData.pxHei,
				w: sourceData.pxWid,
			},
			scale: '1',
		},
		animations: {},
	}

	const totalTiles = sourceData.__cHei * sourceData.__cWid
	let tileIndex = 0

	while (tileIndex < totalTiles) {
		const column = tileIndex % columnCount
		const row = Math.floor(tileIndex / columnCount)

		atlas.frames[`${tileset.id}::${tileIndex}`] = {
			frame: {
				h: sourceData.tileGridSize,
				w: sourceData.tileGridSize,
				x: sourceData.tileGridSize * column,
				y: sourceData.tileGridSize * row,
			},
			sourceSize: {
				h: sourceData.tileGridSize,
				w: sourceData.tileGridSize,
			},
			spriteSourceSize: {
				// TODO: Remove these comments once https://github.com/pixijs/pixijs/pull/9595 has been merged.
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				h: sourceData.tileGridSize,
				w: sourceData.tileGridSize,
				x: 0,
				y: 0,
			},
		}

		tileIndex += 1
	}

	tileset.spritesheet = new Spritesheet(texture, atlas)
	await tileset.spritesheet.parse()

	return tileset
}
