import type { Route } from "./query-router.js";
export class Planner { plan(route:Route){return {steps:[route.tool?"tool":"llm",route.needsRag?"retrieval":null,route.needsMemory?"memory":null].filter(Boolean)};} }
