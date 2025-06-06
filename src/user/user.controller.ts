import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { UserDataDto } from './dto/user-data.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserData(
    @CurrentUserId() userId: string,
  ): Promise<BaseResponse<UserDataDto>> {
    return this.userService.getUserData(userId);
  }

  @Patch('name')
  @UseGuards(JwtAuthGuard)
  async updateUserNickname(
    @CurrentUserId() userId: string,
    @Body('userNickname') userNickname: string,
  ): Promise<BaseResponse<{ userNickname: string }>> {
    return this.userService.updateUserNickname(userId, userNickname);
  }

  @Get('name')
  @UseGuards(JwtAuthGuard)
  async getUserNickname(
    @CurrentUserId() userId: string,
  ): Promise<BaseResponse<{ userNickname: string }>> {
    return this.userService.getUserNickname(userId);
  }
}
