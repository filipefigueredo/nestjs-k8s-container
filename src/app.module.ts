import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationsModule } from './configurations/configurations.module';
import { HttpRequestsModule } from './http-requests/http-requests.module';
import { BreedsParserService } from './breeds-parser.service';

@Module({
  imports: [ConfigurationsModule, HttpRequestsModule],
  controllers: [AppController],
  providers: [AppService, BreedsParserService],
})
export class AppModule {}
