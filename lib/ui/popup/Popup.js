export type PopupProps = {
	width: Number,
	height: Number,
	title: String,
	content: Element,
	buttons: Set,
	hasCloseButton: boolean,
	isMoveable: boolean,
	position: Position,
}

export type Position = {
	top: Number,
	left: Number,
}
export default class Popup {
	constructor(options: PopupProps) {
		this.options = options;
	}
}