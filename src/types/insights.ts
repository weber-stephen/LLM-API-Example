export interface IInsightResponse {
  title?: string;
  insights?: string[];
  _meta?: {
    usage?: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
  };
}
