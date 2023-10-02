import { z } from 'zod';

const FormatSchema = z.object({
  width: z.number(),
  height: z.number(),
  fps: z.number(),
});


const VideoAssetSchema = z.object({
  type: z.literal('video'),
  src: z.string(),
  start: z.number(),
  duration: z.number(),
  style: z.object({}).nonstrict(),
});

const ImageAssetSchema = z.object({
  type: z.literal('image'),
  src: z.string(),
  start: z.number(),
  duration: z.number(),
  style: z.object({}).nonstrict(),
});

const TitleAssetSchema = z.object({
  type: z.literal('title'),
  titleType: z.string(),
  text: z.string(),
  start: z.number(),
  duration: z.number(),
  properties: z.object({}).nonstrict(),
});

const AssetSchema = z.union([VideoAssetSchema, ImageAssetSchema, TitleAssetSchema]);


const VideoSchema = z.object({
  id: z.string(),
  index: z.number(),
  assets: z.array(AssetSchema),
});

const AudioSchema = z.object({
  src: z.string(),
  start: z.number(),
  duration: z.number(),
  volume: z.number(),
});

const TimelineSchema = z.object({
  tracks: z.object({
    video: z.array(VideoSchema),
    audio: z.array(AudioSchema),
    subtitles: z.array(z.object({}).nonstrict()),
  }),
});

const SettingsSchema = z.object({
  name: z.string(),
  format: FormatSchema,
});

export const MainSchema = z.object({
  settings: SettingsSchema.optional(),
  timeline: TimelineSchema.optional(),
});

export type RenderDescription = z.infer<typeof MainSchema>;

