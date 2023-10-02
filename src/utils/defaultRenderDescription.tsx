import {RenderDescription} from './renderDescriptionSchema';

export const defaultRenderDescription: RenderDescription = {
	settings: {
		name: 'Project 1',
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
							src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
							startAtFrame: 0,
							durationInFrames: 50,
						},
						{
							id: 'image-asset-0',
							type: 'image',
							src: 'https://upload.wikimedia.org/wikipedia/en/c/c7/BattleForBikiniBottom.jpg',
							startAtFrame: 50,
							durationInFrames: 50,
							style: {
								position: 'absolute',
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							},
						},
						{
							id: 'css-asset-0',
							type: 'css',
							startAtFrame: 100,
							durationInFrames: 50,
							style: {
								position: 'absolute',
								width: '100%',
								height: '100%',
								background:
									'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
							},
							dynamicStyle: {
								opacity: [
									[0, 50],
									[0, 1],
								],
							},
						},
						{
							id: 'title-asset-0',
							type: 'text',
							text: 'Hey folks!',
							startAtFrame: 0,
							durationInFrames: 50,
							style: {
								fontSize: '100px',
								color: 'red',
							},
						},
					],
				},
				{
					id: 'video-track-1',
					index: 1,
					assets: [
						{
							id: 'title-asset-0',
							type: 'text',
							text: 'Hey folks!',
							startAtFrame: 100,
							durationInFrames: 50,
							style: {
								fontSize: '100px',
								color: 'white',
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
							id: 'audio-asset-0',
							src: 'https://file-examples.com/storage/fe1e98be1065198f8a74ddc/2017/11/file_example_MP3_700KB.mp3',
							startAtFrame: 10,
							durationInFrames: 50,
							volume: 1,
						},
						{
							id: 'audio-asset-1',
							src: 'https://file-examples.com/storage/fe1e98be1065198f8a74ddc/2017/11/file_example_MP3_700KB.mp3',
							startAtFrame: 60,
							durationInFrames: 50,
							volume: 0.5,
						},
					],
				},
			],
			subtitles: [],
		},
	},
};
