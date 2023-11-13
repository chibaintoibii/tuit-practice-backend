import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  // @Cron('*/5 * * * * *')
  // handleCron() {
  //   console.log('cron is running');
  // }
}