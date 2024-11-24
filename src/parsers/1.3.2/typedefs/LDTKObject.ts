// Local imports
import { type LDTKProject } from '../quicktype'
import { type ParsedTilesetMap } from './ParsedTilesetMap'





export type LDTKObject = {
	/** @description An array of levels. */
	levels: unknown[],

	meta: {
		/** @description The app used to generate the data. */
		app: string,

		/** @description The original JSON from the LDtk file. */
		original: LDTKProject,

		/** @description The version of the app that was used to generate the data. */
		version: number,
	},

	/** @description A mapping of tileset IDs to tilesets. */
	tilesets: ParsedTilesetMap,
}
