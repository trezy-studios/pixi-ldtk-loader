// Local imports
import { BaseEntityInstance } from './BaseEntityInstance'
import { BaseFieldInstance } from './BaseFieldInstance'
import { BaseLayerInstance } from './BaseLayerInstance'
import { BaseTileInstance } from './BaseTileInstance'





export interface BaseLevel<
	FieldInstance extends BaseFieldInstance = BaseFieldInstance,
	TileInstance extends BaseTileInstance = BaseTileInstance,
	EntityInstance extends BaseEntityInstance<FieldInstance> = BaseEntityInstance<FieldInstance>,
	LayerInstance extends BaseLayerInstance<TileInstance, EntityInstance> = BaseLayerInstance<TileInstance, EntityInstance>,
> {
	externalRelPath?: null | string,
	fieldInstances: FieldInstance[],
	identifier: string,
	layerInstances?: null | LayerInstance[],
	worldX: number,
	worldY: number,
}
