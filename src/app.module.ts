import { Module } from '@nestjs/common';
import { ConvertedController } from './converted.controller';
import { ConvertedService } from './converted.service';
import { Axios } from "axios";

@Module({
  imports: [Axios],
  controllers: [ConvertedController],
  providers: [ConvertedService],
})
export class AppModule {}
