import {FC} from 'react';

import {Sequence} from 'remotion';
import {SubtitleTrackRenderDescription} from '../utils/renderDescriptionSchema';

export const SubtitlesTrack: FC<SubtitleTrackRenderDescription> = (track) => {
	return (
		<Sequence name={track.id}>
			{track.assets.map((asset) => {
				console.log(asset);
				return null; // TODO: Implement this
			})}
		</Sequence>
	);
};
