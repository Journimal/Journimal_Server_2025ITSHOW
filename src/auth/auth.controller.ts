import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { UserDto } from './dto/user.dto';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthCredentialLoginDto } from './dto/auth-credential-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<BaseResponse<UserDto>> {
    return this.authService.signup(authCredentialDto);
  }

  @Post('login')
  async login(
    @Body() authCredentialLoginDto: AuthCredentialLoginDto,
  ): Promise<BaseResponse<{ accessToken: string }>> {
    return this.authService.login(authCredentialLoginDto);
  }
}
