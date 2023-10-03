import {FC, ComponentProps} from 'react';
import {Img as RemotionImg} from 'remotion';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type ImageProps = ComponentProps<typeof RemotionImg> & {
	dynamicStyle?: any;
};

export const Image: FC<ImageProps> = ({dynamicStyle, ...props}) => {
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return (
		<RemotionImg {...props} style={{...props.style, ...currentFrameStyle}} />
	);
};
