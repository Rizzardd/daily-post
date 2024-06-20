import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { User, UserSchema } from './user/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://appuser:pookierizza@rizza.grgrtmf.mongodb.net/dailypost',
    ),
    UserModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: 'mycatplayspiano',
      signOptions: { expiresIn: '2y' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
