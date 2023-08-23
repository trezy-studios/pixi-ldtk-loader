// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Parses entities from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {import('./quicktype.js').EntityInstance[]} config.sourceData Entity data from LDtk source.
 * @returns {types.LDTKEntity[]} An array of parsed entities.
 */
export function parseEntities(config) {
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
