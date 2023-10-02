import {FC, ComponentProps} from 'react';
import {Img as RemotionImg} from 'remotion';

export const Image: FC<ComponentProps<typeof RemotionImg>> = (props) => {
	return <RemotionImg {...props} />;
};
