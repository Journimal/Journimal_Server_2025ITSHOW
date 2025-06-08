import { GetCurrentUserMissionInfoDto } from './get-current-user-mission-info.dto';

export class GetCurrentUserMissionDto {
  userId: number;
  userMissions: GetCurrentUserMissionInfoDto[];
}
