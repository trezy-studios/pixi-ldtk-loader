// Local imports
import { type EntityInstance } from './quicktype'
import { type LDTKEntity } from './typedefs/LDTKEntity'





// Types
type Config = {
	/** @description Entity data from LDtk source. */
	sourceData: EntityInstance[],
}





/**
 * Parses entities from LDtk source data.
 *
 * @param config All configs.
 * @returns An array of parsed entities.
 */
export function parseEntities(config: Config): LDTKEntity[] {
	const { sourceData } = config

	return sourceData.map(entityInstance => {
		const entity = {
			height: entityInstance.height,
			iid: entityInstance.iid,
			name: entityInstance.__identifier,
			position: {
				x: entityInstance.px[0],
				y: entityInstance.px[1],
			},
			tags: entityInstance.__tags,
			width: entityInstance.width,
		}

		entityInstance.fieldInstances.forEach(fieldInstance => {
			entity[fieldInstance.__identifier] = fieldInstance.__value
		})

		return entity
	})
}
