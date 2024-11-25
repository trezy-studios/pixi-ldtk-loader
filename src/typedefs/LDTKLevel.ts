// Local imports
import { type LDTKLevelLayer } from './LDTKLevelLayer'





export type LDTKLevel = {
	/** @description All layers in the level. */
	layers: null | LDTKLevelLayer[],

	/** @description The name of the level. */
	name: string,

	/** @description The position of the level within the LDtk world. */
	worldPosition: {
		x: number,
		y: number,
	},

	[key: string]: unknown,
}
