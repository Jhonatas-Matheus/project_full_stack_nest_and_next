/*eslint-disable */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { BaseExceptionFilter } from '@nestjs/core';
@Catch(Prisma.PrismaClientKnownRequestError)
export class DatabaseExceptionFilter<T> extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.log('PASSOU PELO EXCEPTION HANDLE')
    console.error(exception.message)
    // console.log(exception.message)
    // console.log(exception.code)
    // console.log(exception.name)
    super.catch(exception, host);
  }

}