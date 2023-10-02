import {CSSProperties, FC, PropsWithChildren} from 'react';
import {interpolateColors, useCurrentFrame, interpolate} from 'remotion';

type DynamicStyleContainerProps = {
	dynamicStyles?: any;
};

export const DynamicStyleContainer: FC<
	PropsWithChildren<DynamicStyleContainerProps>
> = ({dynamicStyles, children}) => {
	const currentFrame = useCurrentFrame();

	const colorInterpolationProperties = ['backgroundColor', 'color'];

	const style = {};
	const dynamicProperties = Object.keys(dynamicStyles);
	dynamicProperties.forEach((property) => {
		if (colorInterpolationProperties.includes(property)) {
			style[property] = interpolateColors(
				currentFrame,
				dynamicStyles[property][0],
				dynamicStyles[property][1]
			);
			return;
		}

		style[property] = interpolate(
			currentFrame,
			dynamicStyles[property][0],
			dynamicStyles[property][1]
		);
	});

	console.log(style);

	return <div style={style}>{children}</div>;
};
