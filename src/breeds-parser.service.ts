import { Injectable } from '@nestjs/common';
import { IListBreedsRequest } from './http-requests/interfaces/list-breeds-request.interface';

@Injectable()
export class BreedsParserService {
  parseBreedsList(breedListRequestData: IListBreedsRequest): string[] {
    const breedObject = breedListRequestData.message;

    return Object.keys(breedObject);
  }

  parseSubBreedsList(breedListRequestData: IListBreedsRequest): string[] {
    const breedObject = breedListRequestData.message;

    const breeds = Object.keys(breedObject);
    let breedList = [];

    breeds.forEach((breed, index) => {
      !breedObject[breed].length
        ? breedList.push(breeds[index])
        : breedObject[breed].forEach((subBreed) => {
            breedList.push(`${subBreed} ${breed}`);
          });
    });

    return breedList;
  }
}
