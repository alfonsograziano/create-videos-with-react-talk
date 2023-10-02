import {FC} from 'react';

import {Sequence} from 'remotion';
import {VideoTrackRenderDescription} from '../utils/renderDescriptionSchema';
import {Video} from './assetLoader/Video';
import {Text} from './assetLoader/Text';
import {Image} from './assetLoader/Image';

export const VideoTrack: FC<VideoTrackRenderDescription> = (track) => {
	return (
		<Sequence name={track.id}>
			{track.assets.map((asset) => (
				<Sequence
					key={asset.id}
					from={asset.startAtFrame}
					durationInFrames={asset.durationInFrames}
					name={asset.id}
				>
					{asset.type === 'video' && <Video src={asset.src} />}
					{asset.type === 'text' && <Text {...asset} />}
					{asset.type === 'image' && <Image {...asset} />}
				</Sequence>
			))}
		</Sequence>
	);
};
