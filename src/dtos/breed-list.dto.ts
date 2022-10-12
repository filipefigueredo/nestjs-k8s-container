import { ApiProperty } from '@nestjs/swagger';

export class BreedListResponseDto {
  /**
   * breeds
   */
  @ApiProperty({ example: ['affenpinscher', 'african', 'airedale', 'akita'] })
  breeds: string[];
}
