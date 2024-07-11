import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Daily } from './daily.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DailyService {
  constructor(@InjectModel(Daily.name) private dailyModel: Model<Daily>) {}

  async createDaily(daily: Daily) {
    const createdDaily = new this.dailyModel(daily);
    return createdDaily.save();
  }

  async getDailies(userId: any) {
    return this.dailyModel.find({ userId });
  }

  async getDailiesToday() {
    return this.dailyModel.find({
      date: {
        $gte: new Date(new Date().setHours(0, 0, 0)),
        $lt: new Date(new Date().setHours(23, 59, 59)),
      },
    });
  }

  async getAllDailies() {
    return this.dailyModel.find({}).sort({ date: -1 });
  }
}
