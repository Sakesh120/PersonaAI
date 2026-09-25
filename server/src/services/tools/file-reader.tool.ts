import fs from "node:fs/promises";
import type { Tool } from "./tool-manager.js";
export const fileReaderTool: Tool = {name:"file-reader",description:"Read a permitted local text file.",async execute(input){const p=typeof input==="string"?input:(input as {path:string}).path;return {text:await fs.readFile(p,"utf8")};}};
