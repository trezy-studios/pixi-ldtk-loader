// Module imports
import { settings } from '@pixi/core'





// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'

import { parseLayers } from './parseLayers.js'
import path from 'path'





/**
 * Parses a level from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {string} config.assetBasePath The base path from which the level will be loaded.
 * @param {import('./ldtk-quicktype.js').Level} config.sourceData Level data from the LDtk source.
 * @param {types.ParsedTilesetMap} config.tilesets Tilesets that have been loaded from the LDtk source.
 * @returns {Promise<types.LDTKLevel>} The parsed level.
 */
export async function parseLevel(config) {
	const {
		assetBasePath,
		tilesets,
	} = config

	let { sourceData } = config

	const level = {
		layers: null,
		name: sourceData.identifier,
		worldPosition: {
			x: sourceData.worldX,
			y: sourceData.worldY,
		},
	}

	if (sourceData.fieldInstances) {
		sourceData.fieldInstances?.forEach(fieldInstance => {
			level[fieldInstance.__identifier] = fieldInstance.__value
		})
	}

	if (sourceData.externalRelPath) {
		const levelSrc = path.join(assetBasePath, sourceData.externalRelPath)

		const levelResponse = await settings.ADAPTER.fetch(levelSrc)
		sourceData = await levelResponse.json()
	}

	level.layers = parseLayers({
		sourceData: sourceData.layerInstances,
		tilesets,
	})

	return level
}
