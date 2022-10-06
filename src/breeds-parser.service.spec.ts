import { Test, TestingModule } from '@nestjs/testing';
import { BreedsParserService } from './breeds-parser.service';

describe('BreedsParserService', () => {
  let service: BreedsParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedsParserService],
    }).compile();

    service = module.get<BreedsParserService>(BreedsParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
