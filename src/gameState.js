import {
	modFox,
	modScene
} from "./ui";
import {
	RAIN_CHANCE,
	SCENES,
	DAY_LENGTH,
	NIGHT_LENGTH,

} from "./constants"

const gameState = {
	current: "INIT",
	clock: 1,
	wakeTime: -1,
	sleepTime: -1,
	tick() {
		this.clock++;
		console.log("clock", this.clock)

		if (this.clock === this.wakeTime) {
			this.wake();
		} else if (this.clock === this.sleepTime) {
			this.sleep()
		}

		return this.clock;
	},
	startGame() {
		console.log("hatching")
		this.current = "HATCHING";
		this.wakeTime = this.clock + 6;
		modFox("egg")
		modScene("day")
	},

	wake() {
		console.log("waking")
		this.current = "IDLING";
		this.wakeTime = -1;
		modFox("idling")
		this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
		modScene(SCENES[this.scene]);
		this.sleepTime = this.clock + DAY_LENGTH

	},

	sleep() {
		this.state = "SLEEP";
		modFox("sleep");
		modScene("night");
		this.wakeTime = this.clock + NIGHT_LENGTH
	},

	handleUserAction(icon) {
		// can't do actions while in these states
		if (
			["POOPING", "SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(
				this.current
			)
		) {
			// do nothing
			return;
		}

		if (this.current === "INIT" || this.current === "DEAD") {
			this.startGame();
			return;
		}

		// execute the currently selected action
		switch (icon) {
			case "weather":
				this.changeWeather();
				break;
			case "poop":
				this.cleanUpPoop();
				break;
			case "fish":
				this.feed();
				break;
		}
	},
	changeWeather() {
		console.log("changeWeather");
	},
	cleanUpPoop() {
		console.log("cleanUpPoop");
	},
	feed() {
		console.log("feed");
	},
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);

export default gameState;
