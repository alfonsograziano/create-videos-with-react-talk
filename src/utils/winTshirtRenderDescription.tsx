import {RenderDescription} from './renderDescriptionSchema';

// This might come from an API
// https://url-decode.com/tool/create-array-js
const people = ['Alfonso', 'Francesco'];

// Randomness is actually what we want - not an issue since is precalculated
// eslint-disable-next-line @remotion/deterministic-randomness
const winner = people[Math.floor(Math.random() * people.length)];

const winnerVideoUrl =
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/winner.mp4';
const confettiVideoUrl =
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/confetti.mp4';
const partyUrl =
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/party.mp3';

export const defaultRenderDescription: RenderDescription = {
	settings: {
		name: 'T-shirt winner',
		format: {
			width: 1920,
			height: 1080,
			fps: 30,
		},
	},
	timeline: {
		tracks: {
			video: [
				{
					id: 'video-track-0',
					index: 0,
					assets: [
						{
							id: 'video-asset-0',
							type: 'video',
							src: winnerVideoUrl,
							startAtFrame: 0,
							durationInFrames: 100,
							startFrom: 56,
						},
						{
							id: 'video-asset-0',
							type: 'video',
							src: confettiVideoUrl,
							startAtFrame: 100,
							durationInFrames: 140,
							startFrom: 230,
						},
						{
							id: 'winner-name',
							type: 'text',
							text: winner,
							startAtFrame: 100,
							durationInFrames: 140,
							dynamicStyle: {
								opacity: [
									[0, 10, 11],
									[0, 1, 1],
								],
							},
							style: {
								color: 'white',
								fontSize: '100px',
								fontFamily: 'sans-serif',
								position: 'absolute',
								marginTop: '500px',
								left: '50%',
								transform: 'translateX(-50%)',
							},
						},
					],
				},
			],
			audio: [
				{
					id: 'audio-track-0',
					index: 0,
					assets: [
						{
							id: 'audio-asset-1',
							src: partyUrl,
							startAtFrame: 80,
							durationInFrames: 160,
							volume: 0.5,
						},
					],
				},
			],
			subtitles: [],
		},
	},
};
