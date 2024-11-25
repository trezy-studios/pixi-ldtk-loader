// Local imports
import { BaseFieldInstance } from './BaseFieldInstance'





export interface BaseEntityInstance<
	FieldInstance extends BaseFieldInstance = BaseFieldInstance,
> {
	__identifier: string,
	__tags: string[],
	fieldInstances: FieldInstance[],
	height: number,
	iid: string,
	px: number[],
	width: number,
}
