import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiGoneResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiRequestTimeoutResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { BreedListResponseDto } from './dtos/breed-list.dto';
import { SubBreedListResponseDto } from './dtos/sub-breed-list.dto';

@Controller('/v1')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @ApiOperation({ summary: 'Ping', description: 'Performs a readiness health check at the service.' })
  @ApiOkResponse({ description: 'Service is up and running.' })
  @ApiBadRequestResponse({ description: 'Errors in params.' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong during the request.' })
  @ApiGoneResponse({ description: 'The resource requested is no longer available and will not be available again.' })
  @ApiRequestTimeoutResponse({ description: 'Request timeout.' })
  @Get('/ping')
  ping(): string {
    return 'Service up and running';
  }
  
  @ApiOperation({ summary: 'Returns a list of all breeds.' })
  @ApiOkResponse({ description: 'The breed list has been successfully returned.', type: [BreedListResponseDto] })
  @ApiNotFoundResponse({ description: 'There are no breeds available.' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong during the request.' })
  @Get('/breeds')
  async listAllDogBreeds(): Promise<BreedListResponseDto> {
    return await this.appService.getAllDogBreeds();
  }

  @ApiOperation({ summary: 'Returns a list of all breeds and sub-breeds.' })
  @ApiOkResponse({ description: 'The sub-breed list has been successfully returned.', type: [SubBreedListResponseDto] })
  @ApiNotFoundResponse({ description: 'There are no breeds available.' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong during the request.' })
  @Get('/subbreeds')
  async listAllDogSubBreeds(): Promise<SubBreedListResponseDto> {
    return await this.appService.getAllDogSubBreeds();
  }
}
