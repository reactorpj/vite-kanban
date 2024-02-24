import {Column} from "./elements/column/Column.js";

export type AppProps = {
	config: Config,
	el: String,
}

type Config = {
	columns: Set<Column>,
}

export class App {
	constructor(options: AppProps) {
		this.options = options;

		this.rootNode = document.querySelector(this.options.el);
	}

	render () {
		this.rootNode.innerHTML = `
			<h1>hello</h1>
		`;
	}
}