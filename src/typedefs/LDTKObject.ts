// Local imports
import { type BaseLDTKProject } from './BaseLDTKProject'
import { type LDTKLevel } from './LDTKLevel'
import { type ParsedTilesetMap } from './ParsedTilesetMap'





export type LDTKObject<LDTKProject extends BaseLDTKProject = BaseLDTKProject> = {
	/** @description An array of levels. */
	levels: LDTKLevel[],

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
