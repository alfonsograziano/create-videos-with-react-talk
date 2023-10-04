import {Composition} from 'remotion';
import {MainSchema} from './utils/renderDescriptionSchema';
import {Timeline} from './components/Timeline';
import {defaultRenderDescription} from './utils/bdayVideoRenderDescription';
import {getTotalDurationInFrames} from './utils/getTotalDurationInFrames';

export const RemotionRoot: React.FC = () => {
	const durationInFrames = getTotalDurationInFrames(defaultRenderDescription);

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
