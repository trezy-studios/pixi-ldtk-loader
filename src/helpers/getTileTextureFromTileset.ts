// Module imports
import { Texture } from 'pixi.js'





// Types
type GeneralTileset = {
	id: number | string,
	spritesheet: {
		textures: Record<string, Texture>,
	},
}

/**
 * Retrieves the texture for a tile from a tileset.
 *
 * @param tileID The ID of the tile.
 * @param tileset The tileset to retrieve the texture from.
 * @returns The tile texture.
 */
export function getTileTextureFromTileset(tileID: number | string, tileset: GeneralTileset): Texture {
	const compiledIDString = `${tileset.id}::${tileID}`
	return tileset.spritesheet.textures[compiledIDString]
}
