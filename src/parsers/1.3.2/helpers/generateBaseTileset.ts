// Local imports
import { type LDTKTileset } from '../typedefs/LDTKTileset'





// Types
type Config = {
	/** @description The number of columns in the tileset. */
	columnCount: number,

	/** @description The ID of the tileset. */
	id: number,

	/** @description The number of rows in the tileset. */
	rowCount: number,

	/** @description The height of columns in the tileset. */
	tileGridHeight: number,

	/** @description The width of a tile grid cell. */
	tileGridWidth: number,
}





/**
 * Generates a base tileset object.
 *
 * @param config All config.
 * @returns The generated tileset base.
 */
export function generateBaseTileset(config: Config): LDTKTileset {
	const {
		columnCount,
		id,
		rowCount,
		tileGridHeight,
		tileGridWidth,
	} = config

	return {
		id,
		meta: {
			columnCount,
			rowCount,
			tileCount: columnCount * rowCount,
		},
		spritesheet: null,
		tile: {
			height: tileGridHeight,
			width: tileGridWidth,
		},
	}
}
