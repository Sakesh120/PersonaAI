import type { Tool } from "./tool-manager.js";
export const documentSearchTool: Tool = {name:"document-search",description:"Search indexed documents.",async execute(){return {status:"Use POST /api/documents/search", results:[]};}};
