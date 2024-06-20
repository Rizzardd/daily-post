import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { UserCredentials, UserRegistration } from './auth.model';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hash: string = await bcrypt.hash(password, salt);

    return hash;
  }

  private async userAlreadyExists(user: UserRegistration) {
    const found = await this.userModel.findOne({ email: user.email });

    if (found)
      throw {
        message: 'Usuario já cadastrado',
      };
  }

  async signUp(user: UserRegistration) {
    user = UserRegistration.parse(user);

    await this.userAlreadyExists(user);
    const hash = await this.hashPassword(user.password);

    const model = new this.userModel({
      email: user.email,
      name: user.name,
      passwordHash: hash,
    });

    await model.save();

    const payload = { sub: model.id, username: model.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }

  async signIn(credentials: UserCredentials) {
    credentials = UserCredentials.parse(credentials);

    const user = await this.userModel.findOne({
      email: credentials.email,
    });

    if (!user) {
      throw new ForbiddenException('Usuário ou senha inválidos');
    }

    const passwordMatched = await bcrypt.compare(
      credentials.password,
      user.passwordHash,
    );

    if (!passwordMatched) {
      throw new ForbiddenException('Usuário ou senha inválidos');
    }

    const payload = { sub: user.id, username: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
