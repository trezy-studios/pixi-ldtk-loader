// Module imports
import {
	Loader,
	type ResolvedAsset,
} from 'pixi.js'





export type ParseConfig = {
	/** @description The LDtk file asset. */
	asset: ResolvedAsset,

	/** @description The string represnetation of the LDtk file contents. */
	ldtkString: string,

	/** @description The loader being used to load this asset. */
	loader: Loader,
}
