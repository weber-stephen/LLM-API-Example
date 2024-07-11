import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Instructor from '@instructor-ai/instructor';
import OpenAI from 'openai';
import { IInsightResponse } from './types/insights';
import { InsightResponseSchema } from './schemas/insights';

@Injectable()
export class LLMService {
  constructor(private configService: ConfigService) {}

  async runChatCompletion(prompt: string): Promise<IInsightResponse> {
    const openAPIKey = this.configService.get<string>('OPENAI_API_KEY');

    const oai = new OpenAI({
      apiKey: openAPIKey ?? undefined,
    });

    const client = Instructor({
      client: oai,
      mode: 'TOOLS',
    });

    // User will be of type z.infer<typeof UserSchema>
    const response = await client.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      response_model: {
        schema: InsightResponseSchema,
        name: 'User',
      },
    });
    return response;
  }
}
