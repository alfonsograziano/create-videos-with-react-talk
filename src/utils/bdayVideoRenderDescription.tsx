// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {RenderDescription} from './renderDescriptionSchema';

const FPS = 30;
const DEMO_IMG =
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/demo.jpeg';
const DEMO_IMG_2 =
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/flutter.jpeg';
const VIOLET_PRIMARY = '#473694';

/**
 * Benvenuti alla ...
 * Welcome on Board
 * Introduzione al GameDev
 * Parliamo di Videogiochi
 * Realizziamo Video con React
 * Cosa abbiamo dopo? 👀
 * Flutter Sliver
 * Shader: Creiamone uno
 * Live Quiz
 * Networking!
 */

export const buildImageSection = (
	from: number,
	duration: number,
	src: string,
	text: string,
	imgStyle: any
) => {
	return [
		{
			id: src,
			type: 'image',
			src,
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				color: 'white',
				fontSize: '100px',
				width: '100%',
				height: '100%',
				...imgStyle?.style,
			},
			dynamicStyle: imgStyle?.dynamicStyle,
		},
		{
			id: text,
			type: 'text',
			text,
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				backgroundColor: VIOLET_PRIMARY,
				padding: '20px',
				paddingLeft: '50px',
				paddingRight: '50px',
				color: 'white',
				fontSize: '70px',
				fontFamily: 'sans-serif',
				textAlign: 'center',
				position: 'absolute',
				bottom: '100px',
				left: '100px',
				borderRadius: '20px',
				boxShadow: '0px 0px 20px rgba(0,0,0,0.4)',
			},
		},
	];
};

export const buildBlurredImageSection = (
	from: number,
	duration: number,
	src: string,
	text: string
) => {
	return [
		{
			id: src,
			type: 'image',
			src,
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				width: '100%',
				height: '100%',
				filter: 'blur(4px)',
				objectFit: 'cover',
			},
			dynamicStyle: {
				scale: [[0, 90], [1, 1.3], ''],
			},
		},
		{
			id: text,
			type: 'text',
			text,
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				backgroundColor: VIOLET_PRIMARY,
				padding: '20px',
				minWidth: '1300px',
				paddingLeft: '50px',
				paddingRight: '50px',
				color: 'white',
				fontSize: '90px',
				fontFamily: 'sans-serif',
				textAlign: 'center',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				borderRadius: '20px',
				boxShadow: '0px 0px 20px rgba(0,0,0,0.4)',
			},
		},
	];
};

export const buildMiddleSection = (
	from: number,
	duration: number,
	text: string
) => {
	return [
		{
			id: 'background',
			type: 'css',
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				backgroundColor: VIOLET_PRIMARY,
				width: '100%',
				height: '100%',
			},
		},
		{
			id: 'test-welcome',
			type: 'text',
			text,
			startAtFrame: from,
			durationInFrames: duration,
			style: {
				color: 'white',
				fontSize: '100px',
				fontFamily: 'sans-serif',
				width: '100%',
				textAlign: 'center',
				position: 'absolute',
				top: '450px',
			},
		},
	];
};

export const defaultRenderDescription: RenderDescription = {
	settings: {
		name: 'DevFest Napoli',
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
							id: 'background-video',
							type: 'video',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/video.mp4',
							startAtFrame: 0,
							durationInFrames: 3 * FPS,
							startFrom: FPS,
							style: {
								width: '100%',
								height: '100%',
								opacity: 0.5,
							},
						},
						{
							id: 'background',
							type: 'css',
							startAtFrame: 0,
							durationInFrames: 3 * FPS,
							style: {
								backgroundColor: VIOLET_PRIMARY,
								width: '100%',
								height: '100%',
								opacity: 0.7,
							},
						},
						{
							id: 'test-welcome',
							type: 'text',
							text: 'Benvenuti alla',
							startAtFrame: 0,
							durationInFrames: 3 * FPS,
							style: {
								color: 'white',
								fontSize: '100px',
								fontFamily: 'sans-serif',
								width: '100%',
								textAlign: 'center',
								position: 'absolute',
								top: '100px',
							},
							dynamicStyle: {
								scale: [[0, 30, 31], [1, 1.3, 1.3], ''],
							},
						},
						{
							id: 'main-img',
							type: 'image',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/devfest.jpg',
							startAtFrame: FPS,
							durationInFrames: 2 * FPS,
							style: {
								width: '700px',
								textAlign: 'center',
								position: 'absolute',
								top: '300px',
								left: '610px',
								boxShadow: '0px 0px 50px rgba(0,0,0,0.7)',
							},
							dynamicStyle: {
								opacity: [
									[0, 10, 11],
									[0, 1, 1],
								],
							},
						},
						// Welcome on board
						...buildImageSection(
							3 * FPS,
							3 * FPS,
							DEMO_IMG,
							'👋🏻 Welcome on Board',
							{
								style: {
									width: '120%',
									height: '120%',
									position: 'absolute',
									top: '-150px',
								},
								dynamicStyle: {
									left: [[0, 90], [0, -400], 'px'],
								},
							}
						),
						...buildImageSection(
							6 * FPS,
							3 * FPS,
							DEMO_IMG_2,
							'🎲 Introduzione al GameDev',
							{
								style: {
									width: '120%',
									height: '120%',
									position: 'absolute',
									top: '-150px',
								},
								dynamicStyle: {
									right: [[0, 90], [0, -400], 'px'],
								},
							}
						),
						...buildImageSection(
							9 * FPS,
							3 * FPS,
							DEMO_IMG,
							'🎮 Parliamo di Videogiochi',
							{
								dynamicStyle: {
									scale: [[0, 90], [1.3, 1], ''],
								},
							}
						),
						...buildImageSection(
							12 * FPS,
							3 * FPS,
							DEMO_IMG_2,
							'📷 Realizziamo Video con React',

							{
								style: {
									width: '120%',
									height: '120%',
									position: 'absolute',
									top: '-100px',
									left: '-100px',
								},
								dynamicStyle: {
									rotate: [[0, 90], [0, 5], 'deg'],
								},
							}
						),
						...buildMiddleSection(15 * FPS, 2 * FPS, 'Cosa abbiamo dopo? 👀'),
						...buildBlurredImageSection(
							17 * FPS,
							3 * FPS,
							'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/flutter.jpeg',
							'📱 Flutter Sliver'
						),
						...buildBlurredImageSection(
							20 * FPS,
							3 * FPS,
							'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/shader.jpeg',
							'🎨 Shader: Creiamone uno'
						),
						...buildBlurredImageSection(
							23 * FPS,
							3 * FPS,
							'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/live-quiz.jpg',
							'❓ Live Quiz'
						),
						...buildBlurredImageSection(
							26 * FPS,
							3 * FPS,
							'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/networking.jpeg',
							'🌐 Networking!'
						),

						...buildBlurredImageSection(
							29 * FPS,
							5 * FPS,
							'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/grazie.jpeg',
							'Grazie a tutti 🎉'
						),

						{
							id: 'fade-out',
							type: 'css',
							startAtFrame: 32 * FPS,
							durationInFrames: 2 * FPS,
							style: {
								backgroundColor: 'black',
								width: '100%',
								height: '100%',
							},
							dynamicStyle: {
								opacity: [
									[0, 60, 61],
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
							id: 'audio',
							src: 'https://create-videos-demo.s3.eu-west-1.amazonaws.com/gdg-napoli/music.mp3',
							startAtFrame: 0,
							durationInFrames: 33 * FPS,
							volume: 1,
						},
					],
				},
			],
			subtitles: [],
		},
	},
};
