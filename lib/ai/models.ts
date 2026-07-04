export const DEFAULT_CHAT_MODEL = "claude-sonnet-4.6";

export const titleModel = {
  id: "mistral-large",
  name: "Mistral Large",
  provider: "mistral",
  description: "Fast model for title generation",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  capabilities: ModelCapabilities;
};

export const chatModels: ChatModel[] = [
  {
    id: "mistral-large",
    name: "Mistral Large",
    provider: "mistral",
    description: "Powerful Mistral flagship model with tool use",
    capabilities: { tools: true, vision: false, reasoning: false },
  },
  {
    id: "mistral-medium-3-5",
    name: "Mistral Medium 3.5",
    provider: "mistral",
    description: "Balanced Mistral model with tool use",
    capabilities: { tools: true, vision: false, reasoning: false },
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    provider: "anthropic",
    description: "High-performance Claude model with vision and tool use",
    capabilities: { tools: true, vision: true, reasoning: false },
  },
  {
    id: "claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    provider: "anthropic",
    description: "Fast and compact Claude model with tool use",
    capabilities: { tools: true, vision: true, reasoning: false },
  },
  {
    id: "claude-sonnet-4.6",
    name: "Claude Sonnet 4.6",
    provider: "anthropic",
    description: "Latest Claude Sonnet with strong reasoning and tool use",
    capabilities: { tools: true, vision: true, reasoning: false },
  },
];

export function getCapabilities(): Record<string, ModelCapabilities> {
  return Object.fromEntries(
    chatModels.map((m) => [m.id, m.capabilities])
  );
}

export function getActiveModels(): ChatModel[] {
  return chatModels;
}

export const allowedModelIds = new Set(chatModels.map((m) => m.id));

export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);

export const isDemo = process.env.IS_DEMO === "1";

export type GatewayModelWithCapabilities = ChatModel;

export async function getAllGatewayModels(): Promise<GatewayModelWithCapabilities[]> {
  return chatModels;
}
