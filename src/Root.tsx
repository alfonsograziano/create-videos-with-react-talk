import {Composition} from 'remotion';
import {MainSchema} from './utils/renderDescriptionSchema';
import {Timeline} from './components/Timeline';
import {defaultRenderDescription} from './utils/defaultRenderDescription';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="MainComposition"
			component={Timeline}
			durationInFrames={150}
			fps={defaultRenderDescription.settings.format.fps}
			width={defaultRenderDescription.settings.format.width}
			height={defaultRenderDescription.settings.format.height}
			schema={MainSchema}
			defaultProps={defaultRenderDescription}
		/>
	);
};
