/**
 * Retrieves the base name of the path's target. This could be either a directory name or a file name.
 *
 * @param {string} path The path from which to extract a base name.
 * @param {string} [extension] An extension to be removed from the base name.
 * @returns {string} The parsed base name.
 */
export function basename(path, extension) {
	const split = path.split('/')

	let target = split.pop()

	if (extension) {
		// eslint-disable-next-line security/detect-non-literal-regexp
		target = target.replace(new RegExp(extension.replace('.', '\\.'), 'u'), '')
	}

	return target.replace(/\/+$/u, '')
}

/**
 * Joins paths.
 *
 * @param  {...string} paths The paths to be joined.
 * @returns {string} The joined path.
 */
export function join(...paths) {
	const parsedPaths = paths
		.reduce((accumulator, path) => {
			const normalisedPath = path
				.replace(/^\//u, '')
				.replace(/\/$/u, '')

			normalisedPath
				.split('/')
				.forEach(segment => {
					switch (segment) {
						case '..':
							accumulator.pop()
							break

						case '.':
							break

						default:
							accumulator.push(segment)
					}
				})

			return accumulator
		}, [])

	return `/${parsedPaths.join('/')}`
}
