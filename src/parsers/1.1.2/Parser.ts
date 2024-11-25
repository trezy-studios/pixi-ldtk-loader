// Local imports
import {
	Convert,
	type EntityInstance,
	type FieldInstance,
	type LayerInstance,
	type LDTKProject,
	type Level,
	type TileInstance,
	type TilesetDefinition,
} from './quicktype'
import { BaseParser } from '../../BaseParser'
import { HostConfig } from '../../typedefs/HostConfig'





// Types
type Config = HostConfig<
	FieldInstance,
	TileInstance,
	TilesetDefinition,
	EntityInstance,
	LayerInstance,
	Level,
	LDTKProject
>





/** The parser class. */
export class Parser extends BaseParser<Config> {
	/**
	 * Compiles an LDtk project.
	 *
	 * @param ldtkString The string content of the .ldtk file.
	 * @returns The compiled LDtk project.
	 */
	toLDTKProject(ldtkString: string) {
		return Convert.toLDTKProject(ldtkString)
	}
}
