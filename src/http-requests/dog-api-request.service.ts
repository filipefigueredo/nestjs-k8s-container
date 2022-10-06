import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from 'src/configurations/config.service';
import { AxiosResponse } from 'axios';
import { STATUS_CODES } from 'http';
import { lastValueFrom } from 'rxjs';
import { IListBreedsRequest } from './interfaces/list-breeds-request.interface';

@Injectable()
export class DogApiRequestService {
  constructor(private readonly ConfigService: ConfigService, private readonly httpService: HttpService) {}

  async listAllBreedsRequest(): Promise<IListBreedsRequest> {
    let response;
    const url = this.ConfigService.get<string>('endpoints.listAllBreeds');

    try {
      response = await lastValueFrom(this.httpService.get(url));
    } catch (error) {
      // Network error handling
      console.log(`[ERROR] Error sending HTTP request at ${url}. Error message: ${error.message}`);
      throw new InternalServerErrorException();
    }

    // Http response handling
    switch (response.status) {
      case 200:
        return response.data;
      default:
        console.log(`[ERROR] The url: ${url} returned an unexpected response status: "${response.status} - ${STATUS_CODES[response.status]}"`);
        throw new InternalServerErrorException();
    }
  }
}
