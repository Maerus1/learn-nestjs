import { Module } from '@nestjs/common';
import { AppController } from './../controllers/app.controller';
import { AppService } from './../services/app.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
