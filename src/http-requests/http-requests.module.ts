import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigurationsModule } from 'src/configurations/configurations.module';
import { DogApiRequestService } from './dog-api-request.service';

@Module({
  imports: [ConfigurationsModule, HttpModule],
  providers: [DogApiRequestService],
  exports: [DogApiRequestService],
})
export class HttpRequestsModule {}
