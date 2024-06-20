import {
  Body,
  Controller,
  Inject,
  Post,
  PreconditionFailedException,
} from '@nestjs/common';
import { UserCredentials, UserRegistration } from './auth.model';
import { AuthService } from './auth.service';
import { Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private authService: AuthService) {}

  @Public()
  @Post('signup')
  async signUp(@Body() input: UserRegistration) {
    try {
      const result = await this.authService.signUp(input);

      return result;
    } catch (error) {
      throw new PreconditionFailedException(error);
    }
  }

  @Public()
  @Post('signin')
  async signIn(@Body() input: UserCredentials) {
    try {
      const result = await this.authService.signIn(input);

      return result;
    } catch (error) {
      throw new PreconditionFailedException(error);
    }
  }
}
