/**
 * @typedef {object} versionCache
 * @property {string | null} javascript A string representation of the JSON Schema.
 * @property {string | null} jsonSchema A string representation of the Typescript output.
 * @property {string | null} typescript A string representation of the Typescript output.
 */

/**
 * @typedef {import('listr2').ListrContext} ListrContext
 * @property {string} baseGithubURL The base Github URL for LDtk JSON Schemas.
 * @property {{ [key: string]: versionCache }} versionCache A cache for data related to each version of LDtk.
 */

export const types = {}
