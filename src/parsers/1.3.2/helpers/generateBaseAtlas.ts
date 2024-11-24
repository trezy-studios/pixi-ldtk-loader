// Module imports
import { type SpritesheetData } from 'pixi.js'





// Types
type Config = {
	/** @description The path to the image file. */
	imageSrc: string,

	/** @description The pixel height of tiles in the tileset. */
	pixelHeight: number,

	/** @description The pixel width of tiles in the tileset. */
	pixelWidth: number,
}





/**
 * Generates a base object for sprite atlases.
 *
 * @param config All config.
 * @returns The generated atlas base.
 */
export function generateBaseAtlas(config: Config): SpritesheetData {
	const {
		imageSrc,
		pixelHeight,
		pixelWidth,
	} = config

	return {
		frames: {},
		meta: {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			format: 'RGBA8888',
			image: imageSrc,
			size: {
				h: pixelHeight,
				w: pixelWidth,
			},
			scale: '1',
		},
		animations: {},
	}
}
