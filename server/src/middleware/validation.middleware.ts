import type { RequestHandler } from "express";
export const requireFields = (...fields:string[]): RequestHandler => (req,res,next) => {
  const missing=fields.filter(f=>!req.body?.[f]); if(missing.length) return res.status(400).json({error:`Missing fields: ${missing.join(", ")}`}); next();
};
