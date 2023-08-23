/** @typedef {import('./quicktype.js').EntityInstance} EntityInstance */
/** @typedef {import('./quicktype.js').LayerInstance} LayerInstance */
/** @typedef {import('./quicktype.js').Level} Level */
/** @typedef {import('./quicktype.js').TilesetDefinition} TilesetDefinition */
/** @typedef {import('./quicktype.js').TileInstance} TileInstance */

/**
 * @typedef {object} LDTKEntity
 * @property {number} height The entity's height.
 * @property {string} iid The internal ID of the entity.
 * @property {string} name The name of the entity.
 * @property {object} position The entity's position relative to the level.
 * @property {number} position.x The entity's horizontal position relative to the level.
 * @property {number} position.y The entity's vertical position relative to the level.
 * @property {string[]} tags An array of tags applied to the entity.
 * @property {number} width The entity's width.
 */

/**
 * @typedef {object} LDTKLevelLayerTile
 * @property {number} alpha The opacity of the level.
 * @property {boolean} flipX Whether the tile should be flipped on the horizontal axis.
 * @property {boolean} flipY Whether the tile should be flipped on the vertical axis.
 * @property {number} height The height of the tile.
 * @property {number} id The ID of the tile.
 * @property {object} position The tile's grid-based position.
 * @property {number} position.x The tile's horizontal grid-based position.
 * @property {number} position.y The tile's vertical grid-based position.
 * @property {object} size The pixel size of the tile.
 * @property {number} size.height The tile's height.
 * @property {number} size.width The tile's width.
 * @property {import('@pixi/core').Texture} texture The Pixi texture to be used when rendering the tile.
 * @property {number} tilesetID The ID of the tileset.
 * @property {number} width The width of the tile.
 */

/**
 * @typedef {object} LDTKLevelLayer
 * @property {string} iid The internal ID of the level.
 * @property {string} name The name of the level.
 * @property {object[]} [entities] Entities in the level.
 * @property {LDTKLevelLayerTile[]} [tiles] Tiles in the level.
 */

/**
 * @typedef {object} LDTKLevel
 * @property {LDTKLevelLayer[]} layers All layers in the level.
 * @property {string} name The name of the level.
 * @property {object} worldPosition The position of the level within the LDtk world.
 * @property {number} worldPosition.x The level's horizontal position relative the LDtk world.
 * @property {number} worldPosition.y The level's vertical position relative the LDtk world.
 */

/**
 * @typedef {object} LDTKTileset
 * @property {number} id The tileset ID.
 * @property {object} meta Metadata about the tileset.
 * @property {number} meta.columnCount The number of columns in the tileset.
 * @property {number} meta.rowCount The number of rows in the tileset.
 * @property {number} meta.tileCount The number of tiles in the tileset.
 * @property {import('@pixi/spritesheet').Spritesheet} spritesheet The number of tiles in the tileset.
 * @property {object} tile Global tile information.
 * @property {number} tile.height The height of tiles.
 * @property {number} tile.width The width of tiles.
 */

/** @typedef {Map<number, LDTKTileset>} ParsedTilesetMap */

/**
 * @typedef {object} LDTKObject
 * @property {object[]} levels An array of levels.
 * @property {object} meta Metadata about the generated data.
 * @property {string} meta.app The app used to generate the data.
 * @property {import('./quicktype.js').LDTKProject} meta.original The original JSON from the LDtk file.
 * @property {number} meta.version The version of the app that was used to generate the data.
 * @property {ParsedTilesetMap} tilesets A mapping of tileset IDs to tilesets.
 */

export const types = {}
