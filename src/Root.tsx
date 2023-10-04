import {Composition} from 'remotion';
import {MainSchema} from './utils/renderDescriptionSchema';
import {Timeline} from './components/Timeline';
import {defaultRenderDescription} from './utils/bdayVideoRenderDescription';
import {getTotalDurationInFrames} from './utils/getTotalDurationInFrames';

export const RemotionRoot: React.FC = () => {
	const durationInFrames = getTotalDurationInFrames(defaultRenderDescription);

	/**
	 * A composition represents the video you want to create,
	 * as a collection of clips (for example, several <Sequence>)
	 * that will play back to back to form your video.
	 */
	return (
		<Composition
			id="MainComposition"
			component={Timeline}
			durationInFrames={durationInFrames}
			fps={defaultRenderDescription.settings.format.fps}
			width={defaultRenderDescription.settings.format.width}
			height={defaultRenderDescription.settings.format.height}
			schema={MainSchema}
			defaultProps={defaultRenderDescription}
		/>
	);
};
