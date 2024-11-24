// Local imports
import { Convert } from './quicktype'
import { type LDTKObject } from './typedefs/LDTKObject'
import { type ParseConfig } from '../../typedefs/ParseConfig'
import { parseLevels } from './parseLevels'
import { parseTilesets } from './parseTilesets'
import * as path from '../../helpers/path'





/**
 * Parse a LDtk file.
 *
 * @param config All config.
 * @returns The parsed LDtk object.
 */
export async function parse(config: ParseConfig) {
	const {
		asset,
		ldtkString,
		loader,
	} = config

	const ldtkJSON = Convert.toLDTKProject(ldtkString)

	const assetBasePath = asset.src.replace(path.basename(asset.src), '')

	const ldtkObject: LDTKObject = {
		levels: [],
		meta: {
			app: 'LDtk',
			original: ldtkJSON,
			version: ldtkJSON.appBuildId,
		},
		tilesets: await parseTilesets({
			assetBasePath,
			loader,
			sourceData: ldtkJSON.defs.tilesets,
		}),
	}

	ldtkObject.levels = await parseLevels({
		assetBasePath,
		sourceData: ldtkJSON.levels,
		tilesets: ldtkObject.tilesets,
	})

	return ldtkObject
}
