import { Injectable, NotFoundException } from '@nestjs/common';
import { BreedsParserService } from './breeds-parser.service';
import { BreedListResponseDto } from './dtos/breedList.dto';
import { DogApiRequestService } from './http-requests/dog-api-request.service';

@Injectable()
export class AppService {
  constructor(private readonly dogApiRequestService: DogApiRequestService, private readonly breedParserService: BreedsParserService) {}

  async getAllDogBreeds(): Promise<BreedListResponseDto> {
    const result = await this.dogApiRequestService.listAllBreedsRequest();
    let parsedBreeds = this.breedParserService.parseBreedsList(result);

    if (!parsedBreeds?.length) {
      throw new NotFoundException();
    }

    return { breeds: parsedBreeds };
  }
}
