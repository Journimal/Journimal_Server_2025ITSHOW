import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from 'src/auth/dto/user.dto';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user?: UserDto }>();
    return request.user;
  },
);
