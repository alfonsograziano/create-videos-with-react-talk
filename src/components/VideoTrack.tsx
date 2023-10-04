import {FC} from 'react';

import {Sequence} from 'remotion';
import {VideoTrackRenderDescription} from '../utils/renderDescriptionSchema';
import {Video} from './assetLoader/Video';
import {Text} from './assetLoader/Text';
import {Image} from './assetLoader/Image';
import {CSSContainer} from './assetLoader/CSSContainer';

export const VideoTrack: FC<VideoTrackRenderDescription> = (track) => {
	return (
		<Sequence name={track.id}>
			{track.assets.map((asset) => {
				console.log(asset);
				return (
					<Sequence
						key={asset.id}
						from={asset.startAtFrame}
						durationInFrames={asset.durationInFrames}
						name={asset.id}
					>
						{asset.type === 'video' && (
							<Video
								// The video in the VideoTrack is muted by default
								// Since we manage the audio in the audio track
								// If we want the audio and video to stay in sync
								// We need to do it manually in the render description
								// This is done only for demo purposes to better show the difference
								// Between audio and video tracks
								muted
								src={asset.src}
								startFrom={asset.startFrom}
							/>
						)}
						{asset.type === 'text' && <Text {...asset} />}
						{asset.type === 'image' && <Image {...asset} />}
						{asset.type === 'css' && <CSSContainer {...asset} />}
					</Sequence>
				);
			})}
		</Sequence>
	);
};
