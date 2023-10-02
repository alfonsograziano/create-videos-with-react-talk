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
							id: 'title-asset-0',
							type: 'text',
							text: 'Hey folks!',
							startAtFrame: 0,
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
							startAtFrame: 10, // Start from x frames
							durationInFrames: 50,
							volume: 1,
						},
						{
							id: 'audio-asset-1',
							src: 'https://file-examples.com/storage/fe1e98be1065198f8a74ddc/2017/11/file_example_MP3_700KB.mp3',
							startAtFrame: 61, // Start from x frames
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
