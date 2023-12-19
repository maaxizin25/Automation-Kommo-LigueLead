import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  message: string;

  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const handleErrors = (
  error: Error,

  request: Request,

  response: Response,

  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error.message.includes("invalid input syntax for type uuid")) {
    return response.status(404).json({
      message: "invalid UUID",
    });
  }

  console.log(error);

  return response.status(500).json({ message: "Internal server error" });
};
