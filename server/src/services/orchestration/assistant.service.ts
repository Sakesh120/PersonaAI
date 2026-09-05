import { OllamaService } from "../llm/ollama.service.js";
import { QueryRouter } from "./query-router.js";
import { buildContext } from "../rag/context-builder.service.js";
import { RetrievalService } from "../rag/retrieval.service.js";
import { ConversationMemoryService } from "../memory/conversation-memory.service.js";
export class AssistantService {
  constructor(private llm=new OllamaService(), private router=new QueryRouter(), private rag=new RetrievalService(), private memory=new ConversationMemoryService()) {}
  async chat(query:string, conversationId="default") {
    const route=this.router.route(query), context=route.needsRag ? buildContext(this.rag.search(query)) : "";
    const history=this.memory.history(conversationId).slice(-8).map(m=>`${m.role}: ${m.content}`).join("\n");
    const prompt=`Conversation:\n${history}\n${context ? `Retrieved context:\n${context}\n` : ""}User: ${query}`;
    const answer=await this.llm.generate(prompt, "You are a private local assistant. Use supplied context when present and say when evidence is missing.");
    this.memory.add(conversationId,{role:"user",content:query,timestamp:new Date().toISOString()});
    this.memory.add(conversationId,{role:"assistant",content:answer,timestamp:new Date().toISOString()});
    return {answer, route};
  }
  getMemory(id:string) { return this.memory.history(id); }
}
