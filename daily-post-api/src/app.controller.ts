import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user/user.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  @Get()
  async getHello(@Req() request: Request): Promise<string> {
    const tokenData = request['user'];

    const user = await this.userModel.findById(tokenData.sub);

    return user.name;
    //return this.appService.getHello();
  }
}
