// Module imports
import { Spritesheet } from 'pixi.js'





export type LDTKTileset = {
	/** @description  The tileset ID. */
	id: number,

	/** @description Metadata about the tileset. */
	meta: {
		/** @description The number of columns in the tileset. */
		columnCount: number,

		/** @description The number of rows in the tileset. */
		rowCount: number,

		/** @description The number of tiles in the tileset. */
		tileCount: number,
	},

	/** @description The number of tiles in the tileset. */
	spritesheet: Spritesheet,

	/** @description Global tile information. */
	tile: {
		height: number,
		width: number,
	}
}
