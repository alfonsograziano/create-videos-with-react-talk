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
	dynamicStyle: z.object({}).optional(), // TODO: Improve this type
});

const VideoAssetSchema = BaseAssetSchema.extend({
	type: z.literal('video'),
	src: z.string(),
	startFrom: z.number().optional(),
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

const ComponentSchema = BaseAssetSchema.extend({
	type: z.literal('component'),
	name: z.string(),
	props: z.record(z.unknown()), // 'props' is a generic object, without specific validation
});

const AssetSchema = z.union([
	VideoAssetSchema,
	TextAssetSchema,
	ImageAssetSchema,
	CSSAssetSchema,
	ComponentSchema,
]);

const AudioAssetSchema = z.object({
	id: z.string(),
	src: z.string(),
	startAtFrame: z.number(),
	durationInFrames: z.number(),
	startFrom: z.number().optional(),
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

const SubtitlesTrackSchema = z.object({
	id: z.string(),
	index: z.number(),
	assets: z.array(z.object({})),
});

const TimelineSchema = z.object({
	tracks: z.object({
		video: z.array(VideoTrackSchema),
		audio: z.array(AudioTrackSchema),
		subtitles: z.array(SubtitlesTrackSchema),
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
export type SubtitleTrackRenderDescription = z.infer<
	typeof SubtitlesTrackSchema
>;

export type TextAssetSchemaRenderDescription = z.infer<typeof TextAssetSchema>;
export type AssetSchemaRenderDescription = z.infer<typeof AssetSchema>;
export type CSSAssetSchemaRenderDescription = z.infer<typeof CSSAssetSchema>;
