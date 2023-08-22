/* eslint-env node */

// Module imports
import { Listr } from 'listr2'





// Local imports
import { generateLDTKTypes } from './generateLDTKTypes.js'
import { getLDTKVersions } from './getLDTKVersions.js'





const tasks = new Listr([
	{
		title: 'Downloading LDtk JSON Schema',
		task: getLDTKVersions,
	},
	{
		title: 'Generating types',
		task: generateLDTKTypes,
	},
])

await tasks.run({
	baseGithubURL: 'https://api.github.com/repos/deepnight/ldtk/contents/docs/archives',
	versionCache: {},
})
