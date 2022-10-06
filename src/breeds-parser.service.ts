import { Injectable } from '@nestjs/common';
import { IListBreedsRequest } from './http-requests/interfaces/list-breeds-request.interface';

@Injectable()
export class BreedsParserService {
  parseBreedsList(breedListRequestData: IListBreedsRequest): string[] {
    const breedObject = breedListRequestData.message;

    return Object.keys(breedObject);
  }
}
