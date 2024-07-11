import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { LLMService } from './llm.service';
import { IInsightResponse } from './types/insights';

export class ChatCompleteRequestDto {
  website: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly llmService: LLMService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/insights')
  async chatComplete(
    @Body() chatCompleteRequest: ChatCompleteRequestDto,
  ): Promise<IInsightResponse> {
    // Simple Prompt
    const prompt = `Generate a title and list of insights from this website: ${chatCompleteRequest.website}`;

    // Call LLM
    const response: IInsightResponse =
      await this.llmService.runChatCompletion(prompt);

    // Return response
    return response;
  }
}
