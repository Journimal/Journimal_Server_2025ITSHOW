import { IsBoolean, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserMissionDto {
  @Type(() => Number)
  @IsInt()
  missionId: number;

  @IsBoolean()
  isCompleted: boolean;
}
