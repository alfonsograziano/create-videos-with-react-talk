import {useState, useEffect} from 'react';
import {useCurrentFrame} from 'remotion';

export default ({start, fps}: {start: number; fps: number}) => {
	const frame = useCurrentFrame();
	const [value, setValue] = useState(start);

	useEffect(() => {
		// Calculate the elapsed time since the start of the animation
		const elapsedTime = frame / fps;
		// Calculate the current value of the countdown
		const currentValue = Math.max(start - elapsedTime, 0); // Ensure the countdown doesn't go below 0
		setValue(currentValue);
	}, [frame, fps, start]);

	// Round the value to avoid displaying long floating numbers
	const displayValue = Math.round(value);

	return <h1>{displayValue}</h1>;
};
