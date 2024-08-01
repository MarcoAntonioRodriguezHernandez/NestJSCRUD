import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private customMessage?: string) {
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = this.customMessage || exception.message;

    console.error(`Error: ${message}, Status: ${status}, Path: ${request.url}`);

    this.handleAlert(status);

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url
      });
  }

  protected handleAlert(status: number) {
    console.log("Alert: An error occurred");
  }
}

