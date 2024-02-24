export type ColumnProps = {
	id: Number,
	title: String,
	backgroundColor: String,
	color: String,
	flexGrow: Number,
	flexGrowHover: Number,
}

export class Column {
	#id: Number;
	#title: String;

	constructor(options: ColumnProps) {
		this.options = options;

		if (!this.options.id || !this.options.title)
		{
			console.log('No columns defined');
		}

		this.#id = options.id;
		this.#title = options.title;
	}
}