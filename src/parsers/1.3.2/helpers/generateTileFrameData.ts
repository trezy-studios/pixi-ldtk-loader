// Module imports
import { type SpritesheetFrameData } from 'pixi.js'





// Types
type Config = {
	/** @description The grid-relative column of the tile. */
	column: number,

	/** @description The grid-relative row of the tile. */
	row: number,

	/** @description The size of a tile grid cell. */
	tileGridSize: number,
}





/**
 * Creates an atlas frame from Ldtk tile data.
 *
 * @param config All config.
 * @returns The generated tile frame data.
 */
export function generateTileFrameData(config: Config): SpritesheetFrameData {
	const {
		column,
		row,
		tileGridSize,
	} = config

	return {
		frame: {
			h: tileGridSize,
			w: tileGridSize,
			x: tileGridSize * column,
			y: tileGridSize * row,
		},
		sourceSize: {
			h: tileGridSize,
			w: tileGridSize,
		},
		spriteSourceSize: {
			h: tileGridSize,
			w: tileGridSize,
			x: 0,
			y: 0,
		},
	}
}
