// Module imports
import { Texture } from 'pixi.js'





/**
 * Retrieves the texture for a tile from a tileset.
 *
 * @param tileID The ID of the tile.
 * @param tileset The tileset to retrieve the texture from.
 * @returns The tile texture.
 */
export function getTileTextureFromTileset(tileID: number | string, tileset: Record<string, unknown>): Texture {
	const compiledIDString = `${tileset.id}::${tileID}`
	return tileset.spritesheet.textures[compiledIDString]
}
