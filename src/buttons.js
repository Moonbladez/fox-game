import {
	ICONS
} from "./constants"

const toggleHighlighted = (icon, show) => {
	document.querySelector(`.${ICONS[icon]}-icon`).classList.toggle("highlighted", show)
}

export const initButtons = (handleUserAction) => {
	let selectedIcon = 0;

	const buttonClick = (event) => {
		if (event.target.classList.contains("left-btn")) {
			toggleHighlighted(selectedIcon, false);
			selectedIcon = (2 + selectedIcon) % ICONS.length;
			toggleHighlighted(selectedIcon, true)
		} else if (
			event.target.classList.contains("right-btn")
		) {
			toggleHighlighted(selectedIcon, false);
			selectedIcon = (1 + selectedIcon) % ICONS.length
			toggleHighlighted(selectedIcon, true)
		} else {
			handleUserAction(ICONS[selectedIcon])
		}
	}

	document.querySelector(".buttons").addEventListener("click", buttonClick)

}
