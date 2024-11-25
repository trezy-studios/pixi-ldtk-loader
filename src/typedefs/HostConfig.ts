// Local imports
import { BaseEntityInstance } from './BaseEntityInstance'
import { BaseFieldInstance } from './BaseFieldInstance'
import { BaseLayerInstance } from './BaseLayerInstance'
import { BaseLDTKProject } from './BaseLDTKProject'
import { BaseLevel } from './BaseLevel'
import { BaseTileInstance } from './BaseTileInstance'
import { BaseTilesetDefinition } from './BaseTilesetDefinition'





export interface HostConfig<
	FieldInstance extends BaseFieldInstance = BaseFieldInstance,
	TileInstance extends BaseTileInstance = BaseTileInstance,
	TilesetDefinition extends BaseTilesetDefinition = BaseTilesetDefinition,
	EntityInstance extends BaseEntityInstance<FieldInstance> = BaseEntityInstance<FieldInstance>,
	LayerInstance extends BaseLayerInstance<TileInstance, EntityInstance> = BaseLayerInstance<TileInstance, EntityInstance>,
	Level extends BaseLevel = BaseLevel,
	LDTKProject extends BaseLDTKProject = BaseLDTKProject,
> {
	EntityInstance: EntityInstance,
	FieldInstance: FieldInstance,
	LayerInstance: LayerInstance,
	LDTKProject: LDTKProject,
	Level: Level,
	TileInstance: TileInstance,
	TilesetDefinition: TilesetDefinition,
}
