import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserId } from 'src/auth/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject() private userService: UserService) {}

  @Get('me')
  async getMe(@UserId() userId) {
    return this.userService.getInfo(userId);
  }

  @Get(':userId')
  async getName(@Param("userId") userId: string) {
    const info = await this.userService.getInfo(userId);
    return info?.name ?? ""
  }
}
