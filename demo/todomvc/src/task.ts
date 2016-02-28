import {reactive} from '../../../src/rdot';

let gid = 1;

export default class Task {
	public id:number;

	@reactive
	public title:string;

	@reactive
	public completed:boolean;

	constructor(title, completed) {
		this.id = gid++;
		this.title = title;
		this.completed = completed;
	}
}