import {FC} from 'react';
import {Sequence} from 'remotion';
import {RenderDescription} from '../utils/renderDescriptionSchema';
import {AudioTrack} from './AudioTrack';
import {VideoTrack} from './VideoTrack';
import {SubtitlesTrack} from './SubtitlesTrack';

export const Timeline: FC<RenderDescription> = (renderDescription) => {
	return (
		<Sequence name="main-timeline">
			{renderDescription.timeline.tracks.subtitles.map((subtitleTrack) => (
				<SubtitlesTrack {...subtitleTrack} key={subtitleTrack.id} />
			))}

			{renderDescription.timeline.tracks.video.map((videoTrack) => (
				<VideoTrack {...videoTrack} key={videoTrack.id} />
			))}

			{renderDescription.timeline.tracks.audio.map((audioTrack) => (
				<AudioTrack {...audioTrack} key={audioTrack.id} />
			))}
		</Sequence>
	);
};
