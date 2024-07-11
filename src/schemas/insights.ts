import { z } from 'zod';

export const InsightResponseSchema = z.object({
  title: z.string(),
  insights: z.string().array(),
});
