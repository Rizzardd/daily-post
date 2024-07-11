import { Module } from '@nestjs/common';
import { DailyController } from './daily.controller';
import { DailyService } from './daily.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Daily, DailySchema } from './daily.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Daily.name, schema: DailySchema }]),
  ],
  controllers: [DailyController],
  providers: [DailyService]
})
export class DailyModule {}
