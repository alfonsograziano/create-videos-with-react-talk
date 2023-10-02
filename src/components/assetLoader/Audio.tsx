import {FC, ComponentProps} from 'react';
import {Audio as RemotionAudio} from 'remotion';

export const Audio: FC<ComponentProps<typeof RemotionAudio>> = (props) => {
	return <Audio {...props} />;
};
