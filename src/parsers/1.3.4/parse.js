// Local imports
import { Convert } from './quicktype.js'
import { parseLevels } from './parseLevels.js'
import { parseTilesets } from './parseTilesets.js'
import * as path from '../../helpers/path.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Parse a LDtk file.
 *
 * @param {object} config All config.
 * @param {import('@pixi/assets').LoadAsset} config.asset The LDtk file asset.
 * @param {string} config.ldtkString The string represnetation of the LDtk file contents.
 * @param {import('@pixi/assets').Loader} config.loader The loader being used to load this asset.
 * @returns {Promise<*>} The parsed LDtk object.
 */
export async function parse(config) {
	const {
		asset,
		ldtkString,
		loader,
	} = config

	const ldtkJSON = Convert.toLDTKProject(ldtkString)

	const assetBasePath = asset.src.replace(path.basename(asset.src), '')

	/** @type {types.LDTKObject} */
	const ldtkObject = {
		levels: [],
		meta: {
			app: 'LDtk',
			original: ldtkJSON,
			version: ldtkJSON.appBuildId,
		},
		tilesets: await parseTilesets({
			assetBasePath,
			loader,
			sourceData: ldtkJSON.defs.tilesets,
		}),
	}

	ldtkObject.levels = await parseLevels({
		assetBasePath,
		sourceData: ldtkJSON.levels,
		tilesets: ldtkObject.tilesets,
	})

	return ldtkObject
}
