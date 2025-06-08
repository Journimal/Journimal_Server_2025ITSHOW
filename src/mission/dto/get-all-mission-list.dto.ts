import { IsString } from 'class-validator';

export class GetAllMissionListDto {
  @IsString()
  missionName: string;

  @IsString()
  missionIcon: string;

  @IsString()
  thumbnail: string;

  @IsString()
  description: string;

  @IsString()
  question1: string;

  @IsString()
  question2: string;

  @IsString()
  question3: string;
}
