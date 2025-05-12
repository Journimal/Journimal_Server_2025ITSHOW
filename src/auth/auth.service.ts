import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { UserDto } from './dto/user.dto';
import { MESSAGE } from 'src/common/constants/message';
import { AuthCredentialLoginDto } from './dto/auth-credential-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: AuthCredentialDto): Promise<BaseResponse<UserDto>> {
    const { userNickname, userId, userPassword } = signupDto;
    const existingUser = await this.prisma.user.findUnique({
      where: { userId },
    });

    if (existingUser) {
      throw new HttpException(
        new BaseResponse(HttpStatus.CONFLICT, MESSAGE.USER_EXISTS),
        HttpStatus.CONFLICT,
      );
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = await this.prisma.user.create({
      data: { userId, userNickname, userPassword: hashedPassword },
    });

    const userDto = new UserDto(newUser);

    return new BaseResponse(HttpStatus.CREATED, MESSAGE.USER_CREATED, userDto);
  }

  async login(
    loginDto: AuthCredentialLoginDto,
  ): Promise<BaseResponse<{ accessToken: string }>> {
    const { userId, userPassword } = loginDto;
    const user = await this.prisma.user.findUnique({
      where: { userId: userId },
    });

    if (!user || !(await bcrypt.compare(userPassword, user.userPassword))) {
      throw new HttpException(
        new BaseResponse(HttpStatus.UNAUTHORIZED, MESSAGE.INVALID_CREDENTIALS),
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { userId: user.userId };
    const accessToken = await this.jwtService.signAsync(payload);

    return new BaseResponse(HttpStatus.OK, 'Login successful', { accessToken });
  }
}
