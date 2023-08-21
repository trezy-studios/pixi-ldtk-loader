/* eslint-env node */

// Module imports
import { Listr } from 'listr2'





// Local imports
import { generateTypes } from './generateTypes.js'
import { getLDTKJSONSchema } from './getLDTKJSONSchema.js'
import { saveTypes } from './saveTypes.js'
import { transpileToJavaScript } from './transpileToJavaScript.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





// Constants
const LDTK_SCHEMA_URL = 'https://ldtk.io/files/JSON_SCHEMA.json'





// Types
/** @typedef {types.ListrContext} ListrContext */





const tasks = new Listr([
	{
		title: 'Downloading LDtk JSON Schema',
		task: getLDTKJSONSchema,
	},
	{
		title: 'Generating quicktype Typescript from JSON Schema',
		task: generateTypes,
	},
	{
		title: 'Transpiling to quicktype from Typescript to JavaScript',
		task: transpileToJavaScript,
	},
	{
		title: 'Writing to disk',
		task: saveTypes,
	},
])

await tasks.run({
	jsOutput: null,
	ldtkJSONSchema: null,
	schemaURL: LDTK_SCHEMA_URL,
	tsOutput: null,
})
