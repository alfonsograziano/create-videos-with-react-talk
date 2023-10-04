import {RenderDescription} from './renderDescriptionSchema';

const FPS = 30;
const config = {
	name: 'Spongebob',
	profilePhoto:
		'https://create-videos-demo.s3.eu-west-1.amazonaws.com/spongebob.png',
};

export const defaultRenderDescription: RenderDescription = {
	settings: {
		name: 'Project 1',
		format: {
			width: 1920,
			height: 1080,
			fps: FPS,
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
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/video1.mp4',
							startAtFrame: 0,
							durationInFrames: 20 * FPS,
							startFrom: 2 * FPS,
						},
					],
				},
				{
					id: 'video-track-1',
					index: 1,
					assets: [
						{
							id: 'spongebob-photo',
							type: 'image',
							src: config.profilePhoto,
							startAtFrame: 0,
							durationInFrames: 20 * FPS,
							style: {
								width: '650px',
								height: '650px',
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
								borderRadius: '50%',
								border: '20px solid red',
								boxShadow: '0px 0px 50px -9px rgba(0,0,0,0.4)',
							},
							dynamicStyle: {
								marginTop: [[0, 100, 101], [1500, 100, 100], 'px'],
							},
						},
					],
				},
				{
					id: 'text-track-1',
					index: 1,
					assets: [
						{
							id: 'happy b-day',
							type: 'text',
							text: 'Happy Birthday, ' + config.name + '!',
							startAtFrame: 3 * FPS,
							durationInFrames: 17 * FPS,
							style: {
								fontWeight: 'bold',
								color: 'white',
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
								marginTop: '800px',
								fontFamily: 'Dancing Script',
							},
							dynamicStyle: {
								fontSize: [[0, 50, 51], [0, 130, 130], 'px'],
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
							id: 'b-day-song',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/happy_b_day.mp3',
							startAtFrame: 0,
							durationInFrames: 62 * FPS,
							volume: 1,
						},
					],
				},
			],
			subtitles: [],
		},
	},
};
