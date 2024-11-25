// Local imports
import { BaseEntityInstance } from './BaseEntityInstance'
import { BaseFieldInstance } from './BaseFieldInstance'
import { BaseLayerInstance } from './BaseLayerInstance'
import { BaseLevel } from './BaseLevel'
import { BaseTileInstance } from './BaseTileInstance'
import { BaseTilesetDefinition } from './BaseTilesetDefinition'





export interface BaseLDTKProject<
	FieldInstance extends BaseFieldInstance = BaseFieldInstance,
	TileInstance extends BaseTileInstance = BaseTileInstance,
	EntityInstance extends BaseEntityInstance<FieldInstance> = BaseEntityInstance<FieldInstance>,
	LayerInstance extends BaseLayerInstance<TileInstance, EntityInstance> = BaseLayerInstance<TileInstance, EntityInstance>,
	Level extends BaseLevel<FieldInstance, TileInstance, EntityInstance, LayerInstance> = BaseLevel<FieldInstance, TileInstance, EntityInstance, LayerInstance>,
	TilesetDefinition extends BaseTilesetDefinition = BaseTilesetDefinition,
> {
	appBuildId: number,
	defs: {
		tilesets: TilesetDefinition[],
	},
	levels: Level[],
}
