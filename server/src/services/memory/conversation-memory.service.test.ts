import { describe,expect,it } from "vitest";
import { ConversationMemoryService } from "./conversation-memory.service.js";
describe("conversation memory",()=>it("stores messages by conversation",()=>{const m=new ConversationMemoryService();m.add("a",{role:"user",content:"hello",timestamp:"now"});expect(m.history("a")).toHaveLength(1);}));
