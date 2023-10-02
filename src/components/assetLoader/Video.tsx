import {FC, ComponentProps} from 'react';
import {Video as RemotionVideo} from 'remotion';

export const Video: FC<ComponentProps<typeof RemotionVideo>> = (props) => {
	return <RemotionVideo {...props} />;
};
