// Local imports
import { type LDTKLevel } from './typedefs/LDTKLevel'
import { type Level } from './quicktype'
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import { parseLevel } from './parseLevel'





// Types
type Config = {

	/** @description The base path from which levels will be loaded. */
	assetBasePath: string

	/** @description LDtk source data. */
	sourceData: Level[],

	/** @description Tilesets that have already been loaded from the LDtk source. */
	tilesets: ParsedTilesetMap,
}





/**
 * Retrieves and parses levels from the LDtk source data.
 *
 * @param config All configs.
 * @returns An array of parsed levels.
 */
export async function parseLevels(config: Config): Promise<LDTKLevel[]> {
	const {
		assetBasePath,
		sourceData,
		tilesets,
	} = config

	const levels = []

	let levelIndex = 0
	while (levelIndex < sourceData.length) {
		levels.push(await parseLevel({
			assetBasePath,
			sourceData: sourceData[levelIndex],
			tilesets,
		}))

		levelIndex += 1
	}

	return levels
}
