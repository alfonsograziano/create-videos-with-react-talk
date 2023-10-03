import {interpolateColors, useCurrentFrame, interpolate} from 'remotion';

const colorInterpolationProperties = ['backgroundColor', 'color'];

export const useDynamicStyle = (dynamicStyles?: any) => {
	const currentFrame = useCurrentFrame();

	if (!dynamicStyles) return {};

	const style: {[key: string]: string} = {};
	const dynamicProperties = Object.keys(dynamicStyles);
	dynamicProperties.forEach((property) => {
		if (colorInterpolationProperties.includes(property)) {
			const interpolatedValue = `${interpolateColors(
				currentFrame,
				dynamicStyles[property][0],
				dynamicStyles[property][1]
			)}${dynamicStyles[property][2] ? dynamicStyles[property][2] : ''}`;
			style[property] = interpolatedValue;
			return;
		}

		const interpolatedValue = `${interpolate(
			currentFrame,
			dynamicStyles[property][0],
			dynamicStyles[property][1]
		)}${dynamicStyles[property][2] ? dynamicStyles[property][2] : ''}`;
		style[property] = interpolatedValue;
	});

	return style;
};
