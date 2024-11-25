// Local imports
import { type LDTKEntity } from './LDTKEntity'
import { type LDTKLevelLayerTile } from './LDTKLevelLayerTile'





export type LDTKLevelLayer = {
	/** @description The internal ID of the level. */
	iid: string,

	/** @description The name of the level. */
	name: string,

	/** @description Entities in the level. */
	entities?: LDTKEntity[],

	/** @description Tiles in the level. */
	tiles?: LDTKLevelLayerTile[],
}
