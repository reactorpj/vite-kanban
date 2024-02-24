import "../src/assets/style.sass"
import {App} from "./App"
import {Column} from "./elements/column/Column.js";

const columns = new Set();
for (let i = 0; i < 4; i++) {
	const column = new Column({
		id: i,
		title: `${i + 1}`,
	});
	columns.add(column);
}

const app = new App({
	el: '#app',
	config: {
		columns: columns,
	}
});

app.render();