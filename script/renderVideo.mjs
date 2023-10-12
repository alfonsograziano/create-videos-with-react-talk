/* eslint-disable */
import {getFunctions} from '@remotion/lambda';
import {renderMediaOnLambda, getRenderProgress} from '@remotion/lambda/client';
import videoProps from './videoConfig.mjs';

import * as dotenv from 'dotenv';
dotenv.config({
	path: '../.env',
});

const functions = await getFunctions({
	region: 'us-east-1',
	compatibleOnly: true,
});

const {functionName} = functions[0];

const {renderId, bucketName} = await renderMediaOnLambda({
	region: 'us-east-1',
	functionName,
	// Generated from Remotion site deploy
	serveUrl:
		'https://remotionlambda-useast1-ff4s6y6rny.s3.us-east-1.amazonaws.com/sites/my-video/index.html',
	composition: 'MainComposition',
	inputProps: videoProps,
	codec: 'h264',
	imageFormat: 'jpeg',
	maxRetries: 1,
	framesPerLambda: 20,
	privacy: 'public',
});

while (true) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const progress = await getRenderProgress({
		renderId,
		bucketName,
		functionName,
		region: 'us-east-1',
	});
	console.log('Current progress: ', progress.overallProgress);
	if (progress.done) {
		console.log('Render finished!', progress.outputFile);
		process.exit(0);
	}
	if (progress.fatalErrorEncountered) {
		console.error('Error enountered', progress.errors);
		process.exit(1);
	}
}
