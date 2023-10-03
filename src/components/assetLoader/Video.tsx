import {FC, ComponentProps} from 'react';
import {Video as RemotionVideo} from 'remotion';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type VideoProps = ComponentProps<typeof RemotionVideo> & {
	dynamicStyle?: any;
};

export const Video: FC<VideoProps> = ({dynamicStyle, ...props}) => {
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return (
		<RemotionVideo {...props} style={{...props.style, ...currentFrameStyle}} />
	);
};
