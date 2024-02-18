import {FC} from 'react';
import {
	Audio,
	Img,
	Sequence,
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
} from 'remotion';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import {fade} from '@remotion/transitions/fade';

export const settings = {
	fps: 30,
	duration: 30 * 6,
	width: 1920,
	height: 1080,
};

const images = [
	// Change me
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/romajs/1695306028401.jpeg',
	// Don't change me, please
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/romajs/1695306045540.jpeg',
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/romajs/1700242499626.jpeg',
	'https://create-videos-demo.s3.eu-west-1.amazonaws.com/romajs/IMG_0877.webp',
];

const Logo = () => {
	const frame = useCurrentFrame();
	const JSOpacity = interpolate(frame, [110, 130], [0, 1]);
	const logoOpacity = interpolate(frame, [90, 110], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				zIndex: 2,
				width: '450px',
				top: '200px',
				left: '735px',
				opacity: logoOpacity,
			}}
		>
			<svg
				viewBox="0 0 224 224"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				data-astro-transition-scope="astro-zojvok56-1"
			>
				<path
					d="M223.955 0.271484H0.407227V223.819H223.955V0.271484Z"
					fill="#8F001C"
				/>
				<path
					d="M88.8307 190.966L102.497 182.684C105.122 187.345 107.52 191.328 113.267 191.328C118.788 191.328 122.272 189.156 122.272 180.784V123.72H139.061V181.01C139.061 198.387 128.879 206.306 113.991 206.306C100.596 206.306 92.8129 199.337 88.8307 190.966Z"
					fill="#FFB200"
					style={{opacity: JSOpacity}}
				/>
				<path
					d="M148.202 189.156L161.868 181.236C165.443 187.119 170.149 191.418 178.431 191.418C185.4 191.418 189.834 187.934 189.834 183.137C189.834 177.39 185.264 175.354 177.616 172.005L173.408 170.195C161.28 165.036 153.27 158.565 153.27 144.899C153.27 132.318 162.864 122.725 177.842 122.725C188.522 122.725 196.17 126.436 201.691 136.165L188.613 144.537C185.716 139.378 182.639 137.341 177.842 137.341C172.91 137.341 169.833 140.464 169.833 144.537C169.833 149.56 172.955 151.596 180.15 154.718L184.359 156.528C198.613 162.638 206.668 168.882 206.668 182.911C206.668 198.025 194.812 206.306 178.838 206.306C163.181 206.306 153.089 198.885 148.202 189.156Z"
					fill="#FFB200"
					style={{opacity: JSOpacity}}
				/>
				<g>
					<path
						d="M152.546 85.7083H142.998V110.145H152.546V85.7083Z"
						fill="#FFB200"
					/>
					<path
						d="M133.178 85.7083H123.63V110.145H133.178V85.7083Z"
						fill="#FFB200"
					/>
					<path
						d="M113.855 85.7083H104.307V110.145H113.855V85.7083Z"
						fill="#FFB200"
					/>
					<path
						d="M55.8416 85.7083H46.2933V110.145H55.8416V85.7083Z"
						fill="#FFB200"
					/>
					<path
						d="M75.1644 85.7083H65.6161V110.145H75.1644V85.7083Z"
						fill="#FFB200"
					/>
					<path
						d="M36.4735 85.7083H26.9253V110.145H36.4735V85.7083Z"
						fill="#FFB200"
					/>
				</g>
				<g>
					<path
						d="M152.546 53.1717H142.998V77.6081H152.546V53.1717Z"
						fill="#FFB200"
					/>
					<path
						d="M133.178 53.1717H123.63V77.6081H133.178V53.1717Z"
						fill="#FFB200"
					/>
					<path
						d="M94.5325 53.1717H84.9843V77.6081H94.5325V53.1717Z"
						fill="#FFB200"
					/>
					<path
						d="M113.855 53.1717H104.307V77.6081H113.855V53.1717Z"
						fill="#FFB200"
					/>
					<path
						d="M55.8416 53.1717H46.2933V77.6081H55.8416V53.1717Z"
						fill="#FFB200"
					/>
					<path
						d="M36.4735 53.1717H26.9253V77.6081H36.4735V53.1717Z"
						fill="#FFB200"
					/>
				</g>
				<path
					d="M99.0125 109.964L55.2533 20.8162H45.705L89.419 109.964H99.0125Z"
					fill="#FFB200"
				/>
				<path
					d="M36.4735 20.6351H26.9253V45.0715H36.4735V20.6351Z"
					fill="#FFB200"
				/>
			</svg>
		</AbsoluteFill>
	);
};

const FadeOut = () => {
	const frame = useCurrentFrame();
	const logoOpacity = interpolate(frame, [150, 160], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				zIndex: 3,
				width: '100%',
				height: '100%',
				opacity: logoOpacity,
				backgroundColor: 'black',
			}}
		/>
	);
};

export const RomaJS: FC = () => {
	const frame = useCurrentFrame();

	const titleWidth = interpolate(frame, [89, 90, 110, 111], [0, 0, 1200, 1200]);
	console.log(titleWidth, frame);
	return (
		<Sequence name="timeline">
			<FadeOut />
			<Sequence>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div style={{width: '200px'}}>
						<Logo />
					</div>
				</div>
			</Sequence>

			<Sequence>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						zIndex: 2,
						width: '100%',
						position: 'absolute',
						top: '700px',
					}}
				>
					<h1
						style={{
							fontWeight: 'bold',
							color: 'white',
							fontSize: '56px',
							fontFamily: 'Open Sans',
							padding: '20px',
							backgroundColor: '#121212',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
							width: titleWidth,
							display: titleWidth === 0 ? 'none' : 'block',
						}}
					>
						La tech community di Javascript su Roma
					</h1>
				</div>
			</Sequence>
			<Audio
				src="https://create-videos-demo.s3.eu-west-1.amazonaws.com/romajs/audio.mp3"
				volume={(f) => interpolate(f, [150, 159], [1, 0])}
				startFrom={0}
			/>

			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={30}>
					<Img
						src={images[3]}
						style={{
							objectFit: 'cover',
							width: '100%',
							objectPosition: '50% 100%',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={slide()}
					timing={linearTiming({durationInFrames: 10})}
				/>
				<TransitionSeries.Sequence durationInFrames={40}>
					<Img
						src={images[2]}
						style={{
							objectFit: 'cover',
							width: '100%',
							objectPosition: '50% 20%',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={wipe()}
					timing={linearTiming({durationInFrames: 10})}
				/>
				<TransitionSeries.Sequence durationInFrames={60}>
					<Img
						src={images[0]}
						style={{
							objectFit: 'cover',
							width: '100%',
							objectPosition: '50% 10%',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={fade()}
					timing={linearTiming({durationInFrames: 10})}
				/>
				<TransitionSeries.Sequence durationInFrames={80}>
					<AbsoluteFill
						style={{
							backgroundColor: '#FFB200',
						}}
					/>
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</Sequence>
	);
};
