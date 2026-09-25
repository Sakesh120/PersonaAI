import type { Tool } from "./tool-manager.js";
export const calculatorTool: Tool = { name:"calculator", description:"Evaluate basic arithmetic expressions.", async execute(input) {
  const expression = typeof input === "string" ? input : (input as {expression?:string})?.expression || "";
  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) throw new Error("Only arithmetic characters are allowed");
  return { result: Function(`"use strict"; return (${expression})`)() };
}};
