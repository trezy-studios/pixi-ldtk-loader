// Module imports
import {
	checkExtension,
	LoaderParserPriority,
} from '@pixi/assets'
import {
	ExtensionType,
	settings,
} from '@pixi/core'





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
		const ldtkString = await response.text()

		const untypedLDTKJSON = JSON.parse(ldtkString)
		const { parse } = await import(`./parsers/${untypedLDTKJSON.jsonVersion}/index.js`)

		return parse({
			asset,
			ldtkString,
			loader,
		})
	},
}
