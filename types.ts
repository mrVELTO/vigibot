
export enum MessageSender {
  USER = 'USER',
  BOT = 'BOT',
  SYSTEM = 'SYSTEM', // For errors or info messages
}

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web: GroundingChunkWeb;
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}
