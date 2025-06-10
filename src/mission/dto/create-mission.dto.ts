import { IsBoolean, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserMissionDto {
  @IsInt()
  tripId: number;

  @IsInt()
  round: number;

  @Type(() => Number)
  @IsInt()
  missionId: number;

  @IsBoolean()
  isCompleted: boolean;
}
