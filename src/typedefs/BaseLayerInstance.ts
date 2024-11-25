// Local imports
import { BaseEntityInstance } from './BaseEntityInstance'
import { BaseTileInstance } from './BaseTileInstance'





export interface BaseLayerInstance<
	TileInstance extends BaseTileInstance = BaseTileInstance,
	EntityInstance extends BaseEntityInstance = BaseEntityInstance,
> {
	__identifier: string,
	__tilesetDefUid?: null | number,
	__type: string,
	autoLayerTiles: TileInstance[],
	entityInstances: EntityInstance[],
	gridTiles: TileInstance[],
	iid: string,
}
