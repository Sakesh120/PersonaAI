export type Tool = { name: string; description: string; execute(input: unknown): Promise<unknown> };
export class ToolManager {
  private tools = new Map<string, Tool>();
  register(tool: Tool) { this.tools.set(tool.name, tool); }
  list() { return [...this.tools.values()].map(({name,description}) => ({name,description})); }
  async execute(name: string, input: unknown) { const t=this.tools.get(name); if (!t) throw new Error(`Unknown tool: ${name}`); return t.execute(input); }
}
