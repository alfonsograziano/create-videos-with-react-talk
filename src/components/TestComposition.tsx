import {FC} from 'react';
import {Sequence} from 'remotion';
import {RenderDescription} from '../utils/renderDescriptionSchema';
import {AudioTrack} from './AudioTrack';
import {VideoTrack} from './VideoTrack';

export const MyComposition: FC<RenderDescription> = (renderDescription) => {
	return (
		<Sequence name="main-timeline">
			{renderDescription.timeline.tracks.video.map((videoTrack) => (
				<VideoTrack {...videoTrack} key={videoTrack.id} />
			))}

			{renderDescription.timeline.tracks.audio.map((audioTrack) => (
				<AudioTrack {...audioTrack} key={audioTrack.id} />
			))}
		</Sequence>
	);
};
