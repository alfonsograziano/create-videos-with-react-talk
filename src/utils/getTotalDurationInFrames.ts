import {RenderDescription} from './renderDescriptionSchema';

export const getTotalDurationInFrames = (rd: RenderDescription) => {
	let maxTotalDuration = 0;

	const getTotalDurationFromAsset = (start: number, duration: number) =>
		start + duration;

	const mainTimeline = rd.timeline;

	mainTimeline.tracks.video.forEach((track) => {
		track.assets.forEach((asset) => {
			maxTotalDuration = Math.max(
				maxTotalDuration,
				getTotalDurationFromAsset(asset.startAtFrame, asset.durationInFrames)
			);
		});
	});

	mainTimeline.tracks.audio.forEach((track) => {
		track.assets.forEach((asset) => {
			maxTotalDuration = Math.max(
				maxTotalDuration,
				getTotalDurationFromAsset(asset.startAtFrame, asset.durationInFrames)
			);
		});
	});

	// TODO: Implement the same for subtitles
	// If you're not as lazy as me, feel free to open a PR

	return maxTotalDuration;
};
