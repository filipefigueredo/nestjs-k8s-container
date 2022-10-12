import { ApiProperty } from '@nestjs/swagger';

export class SubBreedListResponseDto {
  /**
   * breeds
   */
  @ApiProperty({ example: ['affenpinscher', 'african', 'airedale', 'akita'] })
  subBreeds: string[];
}
