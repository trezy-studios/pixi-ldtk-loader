export type LDTKEntity = {
	/** @description The entity's height. */
	height: number,

	/** @description The internal ID of the entity. */
	iid: string,

	/** @description The name of the entity. */
	name: string,

	/** @description The entity's position relative to the level. */
	position: {
		x: number,
		y: number,
	},

	/** @description An array of tags applied to the entity. */
	tags: string[],

	/** @description The entity's width. */
	width: number,

	[key: string]: unknown,
}
