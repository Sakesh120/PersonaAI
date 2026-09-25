export type Message = { role: "user"|"assistant"|"system"; content: string; timestamp: string };
export class ConversationMemoryService {
  private conversations = new Map<string, Message[]>();
  history(id: string) { return this.conversations.get(id) || []; }
  add(id: string, message: Message) { const h=this.history(id); h.push(message); this.conversations.set(id,h); }
  list() { return [...this.conversations.keys()]; }
}
