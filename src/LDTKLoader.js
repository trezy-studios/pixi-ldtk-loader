// Module imports
import {
	checkExtension,
	LoaderParserPriority,
} from '@pixi/assets'
import {
	ExtensionType,
	settings,
} from '@pixi/core'





// Local imports
import { Convert } from './helpers/ldtk-quicktype.js'
import { parseLevels } from './helpers/parseLevels.js'
import { parseTilesets } from './helpers/parseTilesets.js'
import * as path from './path.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './helpers/types.js'





/** @type {import('@pixi/assets').LoaderParser} */
export const LDTKLoader = {
	extension: {
		type: ExtensionType.LoadParser,
		priority: LoaderParserPriority.High,
	},

	/**
	 * Tests the asset's path to determine if we it should be handled by this loader.
	 *
	 * @param {string} url The URL of the asset.
	 * @returns {boolean} Whether to handle the asset.
	 */
	test(url) {
		return checkExtension(url, '.ldtk')
	},

	/**
	 * Load a TMX file.
	 *
	 * @param {string} url The URL of the TMX file.
	 * @param {import('@pixi/assets').LoadAsset} asset The TMX file asset.
	 * @param {import('@pixi/assets').Loader} loader The loader being used to load this asset.
	 * @returns {Promise<*>} The parsed LDtk object.
	 */
	async load(url, asset, loader) {
		const response = await settings.ADAPTER.fetch(url)

		const ldtkText = await response.text()
		const ldtkJSON = Convert.toLDTKProject(ldtkText)

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
	},
}
