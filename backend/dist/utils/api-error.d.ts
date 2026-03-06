import { HttpException, HttpStatus } from '@nestjs/common';
export declare class ApiError extends HttpException {
    constructor(message: string, status?: HttpStatus);
}
