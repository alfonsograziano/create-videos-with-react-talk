import {z} from 'zod';

const FormatSchema = z.object({
	width: z.number(),
	height: z.number(),
	fps: z.number(),
});
const BaseAssetSchema = z.object({
	id: z.string(),
	startAtFrame: z.number(),
	durationInFrames: z.number(),
	style: z.object({}).optional(),
});

const VideoAssetSchema = BaseAssetSchema.extend({
	type: z.literal('video'),
	src: z.string(),
});

const ImageAssetSchema = BaseAssetSchema.extend({
	type: z.literal('image'),
	src: z.string(),
});

const TextAssetSchema = BaseAssetSchema.extend({
	type: z.literal('text'),
	text: z.string(),
});

const CSSAssetSchema = BaseAssetSchema.extend({
	type: z.literal('css'),
});

const AssetSchema = z.union([
	VideoAssetSchema,
	TextAssetSchema,
	ImageAssetSchema,
	CSSAssetSchema,
]);

const AudioAssetSchema = z.object({
	id: z.string(),
	src: z.string(),
	startAtFrame: z.number(),
	durationInFrames: z.number(),
	volume: z.number(),
});

const VideoTrackSchema = z.object({
	id: z.string(),
	index: z.number(),
	assets: z.array(AssetSchema),
});

const AudioTrackSchema = z.object({
	id: z.string(),
	index: z.number(),
	assets: z.array(AudioAssetSchema),
});

const TimelineSchema = z.object({
	tracks: z.object({
		video: z.array(VideoTrackSchema),
		audio: z.array(AudioTrackSchema),
		subtitles: z.array(z.object({}).nonstrict()),
	}),
});

const SettingsSchema = z.object({
	name: z.string(),
	format: FormatSchema,
});

export const MainSchema = z.object({
	settings: SettingsSchema,
	timeline: TimelineSchema,
});

export type RenderDescription = z.infer<typeof MainSchema>;

export type AudioTrackRenderDescription = z.infer<typeof AudioTrackSchema>;
export type VideoTrackRenderDescription = z.infer<typeof VideoTrackSchema>;

export type TextAssetSchemaRenderDescription = z.infer<typeof TextAssetSchema>;
export type AssetSchemaRenderDescription = z.infer<typeof AssetSchema>;
export type CSSAssetSchemaRenderDescription = z.infer<typeof CSSAssetSchema>;
