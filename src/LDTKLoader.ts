// Module imports
import {
	checkExtension,
	DOMAdapter,
	ExtensionType,
	Loader,
	type LoaderParser,
	LoaderParserPriority,
	type ResolvedAsset,
} from 'pixi.js'





// Constants
const EXTENSION_NAME = 'LDTKLoader'





export const LDTKLoader: LoaderParser = {
	name: EXTENSION_NAME,

	extension: {
		name: EXTENSION_NAME,
		priority: LoaderParserPriority.High,
		type: ExtensionType.LoadParser,
	},

	/**
	 * Tests the asset's path to determine if we it should be handled by this loader.
	 *
	 * @param url The URL of the asset.
	 * @returns Whether to handle the asset.
	 */
	test(url: string) {
		return checkExtension(url, '.ldtk')
	},

	/**
	 * Load a TMX file.
	 *
	 * @param url The URL of the TMX file.
	 * @param asset The TMX file asset.
	 * @param loader The loader being used to load this asset.
	 * @returns The parsed LDtk object.
	 */
	async load(url: string, asset: ResolvedAsset, loader: Loader) {
		const adapter = DOMAdapter.get()

		const response = await adapter.fetch(url)
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
