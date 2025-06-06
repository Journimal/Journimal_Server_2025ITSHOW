import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MESSAGE } from 'src/common/constants/message';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDataDto } from './dto/user-data.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserData(userId: string): Promise<BaseResponse<UserDataDto>> {
    const user = await this.prisma.user.findUnique({ where: { userId } });

    if (!user) {
      throw new HttpException(
        new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.USER_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    return new BaseResponse(HttpStatus.OK, MESSAGE.USER_FOUND, user);
  }

  async getUserNickname(
    userId: string,
  ): Promise<BaseResponse<{ userNickname: string }>> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
    });

    if (!user) {
      throw new HttpException(
        new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.USER_NICKNAME_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    return new BaseResponse(HttpStatus.OK, MESSAGE.USER_NICKNAME_FOUND, {
      userNickname: user.userNickname,
    });
  }

  async updateUserNickname(
    userId: string,
    userNickname: string,
  ): Promise<BaseResponse<{ userNickname: string }>> {
    const user = await this.prisma.user.update({
      where: { userId },
      data: { userNickname },
    });

    if (!user) {
      throw new HttpException(
        new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.USER_NICKNAME_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }
    return new BaseResponse(HttpStatus.OK, MESSAGE.USER_NICKNAME_UPDATED, {
      userNickname: user.userNickname,
    });
  }
}
