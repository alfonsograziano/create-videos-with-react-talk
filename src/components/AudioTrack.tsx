/* eslint-disable @remotion/volume-callback */
// TODO: Remove this eslint-disable once volume prop is fixed
import {FC} from 'react';

import {Sequence} from 'remotion';
import {AudioTrackRenderDescription} from '../utils/renderDescriptionSchema';
import {Audio} from './assetLoader/Audio';

export const AudioTrack: FC<AudioTrackRenderDescription> = (track) => {
	return (
		<Sequence name={track.id}>
			{track.assets.map((asset) => (
				<Sequence
					key={asset.id}
					from={asset.startAtFrame}
					durationInFrames={asset.durationInFrames}
					name={asset.id}
				>
					<Audio
						src={asset.src}
						volume={asset.volume}
						startFrom={asset.startFrom}
					/>
				</Sequence>
			))}
		</Sequence>
	);
};
