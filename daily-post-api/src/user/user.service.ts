import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async getInfo(userId: string) {
    const user = await this.userModel.findById(userId);

    if (!user) return null;

    return {
      name: user.name,
      email: user.email,
      id: user._id,
    };
  }
}
