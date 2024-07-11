import { Body, Controller, Get, Inject, Post, Request } from '@nestjs/common';
import { DailyService } from './daily.service';
import { UserId } from 'src/auth/auth.guard';

@Controller('daily')
export class DailyController {
  constructor(@Inject() private dailyService: DailyService) {}

  @Post()
  async createDaily(
    @UserId() userId,
    @Body('done') done: string,
    @Body('todo') todo: string,
    @Body('issues') issues: string | undefined,
  ) {
    const daily = {
      userId: userId,
      done,
      todo,
      issues: issues || 'Nenhum',
      date: new Date(),
    };

    return this.dailyService.createDaily(daily);
  }

  @Get()
  async getDaily(@UserId() userId) {
    return this.dailyService.getDailies(userId);
  }

  @Get('today')
  async getDailyToday() {
    return this.dailyService.getDailiesToday();
  }

  @Get('all')
  async getDailyAll() {
    return this.dailyService.getAllDailies();
  }
}
