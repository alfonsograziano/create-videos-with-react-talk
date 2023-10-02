import {Composition} from 'remotion';
import {MainSchema} from './utils/renderDescriptionSchema';
import {MyComposition} from './components/TestComposition';
import {defaultRenderDescription} from './utils/defaultRenderDescription';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			// You can take the "id" to render a video:
			// npx remotion render src/index.ts <id> out/video.mp4
			id="HelloWorld"
			component={MyComposition}
			durationInFrames={150}
			fps={30}
			width={1920}
			height={1080}
			// You can override these props for each render:
			// https://www.remotion.dev/docs/parametrized-rendering
			schema={MainSchema}
			defaultProps={defaultRenderDescription}
		/>
	);
};
