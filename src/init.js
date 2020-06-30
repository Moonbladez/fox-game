const TICK_RATE = 3000;

const tick = () => {
	console.log("tick", Date.now());
};

const init = () => {
	console.log("starting game");

	let nextTimeToTick = Date.now();

	const nextAnimationFrame = () => {
		const now = Date.now();

		if (nextTimeToTick <= now) {
			tick();
			nextTimeToTick = now + TICK_RATE;
		}
		requestAnimationFrame(nextAnimationFrame);
	};

	requestAnimationFrame(nextAnimationFrame);
};

init();
