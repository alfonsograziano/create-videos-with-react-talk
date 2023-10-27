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
							durationInFrames: 23 * FPS,
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
							durationInFrames: 6 * FPS,
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
							durationInFrames: 3 * FPS,
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
				{
					id: 'images-slideshow-track-1',
					index: 1,
					assets: [
						{
							id: 'happy b-day',
							type: 'image',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/photo_1.jpg',
							startAtFrame: 6 * FPS,
							durationInFrames: 3 * FPS,
							dynamicStyle: {
								scale: [[0, 90], [1, 1.3], ''],
							},
						},
						{
							id: 'happy b-day',
							type: 'image',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/photo2.jpeg',
							startAtFrame: 9 * FPS,
							durationInFrames: 3 * FPS,

							dynamicStyle: {
								scale: [[0, 90], [1.4, 1], ''],
							},
						},
						{
							id: 'happy b-day',
							type: 'image',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/photo_3.jpeg',
							startAtFrame: 12 * FPS,
							durationInFrames: 3 * FPS,
							style: {
								scale: '1.5',
							},
							dynamicStyle: {
								rotate: [[0, 90], [0, 10], 'deg'],
							},
						},
						{
							id: 'happy b-day',
							type: 'text',
							text: 'Thanks for being with us',
							startAtFrame: 15 * FPS,
							durationInFrames: 8 * FPS,
							style: {
								fontWeight: 'bold',
								color: 'white',
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
								marginTop: 'auto',
								marginBottom: 'auto',
								fontFamily: 'Dancing Script',
							},
							dynamicStyle: {
								fontSize: [[0, 50, 51], [0, 130, 130], 'px'],
							},
						},
						{
							id: 'happy b-day',
							type: 'css',
							startAtFrame: 20 * FPS,
							durationInFrames: 3 * FPS,
							style: {
								backgroundColor: 'black',
								width: '100%',
								height: '100%',
							},
							dynamicStyle: {
								opacity: [
									[0, 50, 51],
									[0, 1, 1],
								],
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
							durationInFrames: 24 * FPS,
							volume: 1,
						},
					],
				},
			],
			subtitles: [],
		},
	},
};
