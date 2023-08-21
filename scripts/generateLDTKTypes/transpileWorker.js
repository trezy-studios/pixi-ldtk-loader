/* eslint-env node */

// Module imports
import { parentPort } from 'worker_threads'
import transpile from 'ts-to-jsdoc'





parentPort.on('message', input => {
	const transpiledOutput = transpile(input)

	parentPort.postMessage(transpiledOutput)
})
