export interface LongTermMemoryService { remember(text:string):Promise<void>; recall(query:string):Promise<string[]>; }
export class PlaceholderLongTermMemoryService implements LongTermMemoryService { async remember(_text:string){} async recall(_query:string){return [];} }
