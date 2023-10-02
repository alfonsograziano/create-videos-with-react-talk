import {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {RenderDescription} from '../utils/renderDescriptionSchema';

export const MyComposition: FC<RenderDescription> = (renderDescription) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 100,
				backgroundColor: 'white',
			}}
		>
			The current project name is {renderDescription?.settings?.name}
		</AbsoluteFill>
	);
};
