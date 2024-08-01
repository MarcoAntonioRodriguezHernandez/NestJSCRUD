import { Catch, NotFoundException as NestNotFoundException } from '@nestjs/common';
import { HttpExceptionFilter } from "./GlobalExceptions";

@Catch(NestNotFoundException)
export class NotFoundException extends HttpExceptionFilter {
  protected handleAlert(status: number) {
    if (status === 404) {

    } else {
      super.handleAlert(status);
    }
  }
}