import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

//Custom Decorator for controller guard
export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
