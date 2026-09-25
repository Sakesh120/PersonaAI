import type { ErrorRequestHandler } from "express";
export const errorMiddleware: ErrorRequestHandler = (error,_req,res,_next) => res.status(500).json({error:error.message || "Internal error"});
