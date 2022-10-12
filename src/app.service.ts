import { Injectable, NotFoundException } from '@nestjs/common';
import { BreedsParserService } from './breeds-parser.service';
import { BreedListResponseDto } from './dtos/breed-list.dto';
import { SubBreedListResponseDto } from './dtos/sub-breed-list.dto';
import { DogApiRequestService } from './http-requests/dog-api-request.service';

@Injectable()
export class AppService {
  constructor(private readonly dogApiRequestService: DogApiRequestService, private readonly breedParserService: BreedsParserService) {}

  async getAllDogBreeds(): Promise<BreedListResponseDto> {
    const result = await this.dogApiRequestService.listAllBreedsRequest();
    let parsedBreeds = this.breedParserService.parseBreedsList(result);

    if (!parsedBreeds.length) {
      throw new NotFoundException();
    }

    return { breeds: parsedBreeds };
  }

  async getAllDogSubBreeds(): Promise<SubBreedListResponseDto> {
    const result = await this.dogApiRequestService.listAllBreedsRequest();
    let parsedBreeds = this.breedParserService.parseSubBreedsList(result);

    if (!parsedBreeds?.length) {
      throw new NotFoundException();
    }

    return { subBreeds: parsedBreeds };
  }
}
