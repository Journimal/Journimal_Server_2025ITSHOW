import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllMissionListDto } from './dto/get-all-mission-list.dto';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { MESSAGE } from 'src/common/constants/message';
import { CreateUserMissionDto } from './dto/create-mission.dto';
import { GetCurrentUserMissionDto } from './dto/get-current-user-mission.dto';
import { CompleteMissionDto } from './dto/complete-mission.dto';

@Injectable()
export class MissionService {
  constructor(private readonly prisma: PrismaService) {}

  // get all mission list
  async getAllMissionList(): Promise<BaseResponse<GetAllMissionListDto[]>> {
    const missions = await this.prisma.mission.findMany();

    if (!missions) {
      throw new HttpException(
        new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.MISSION_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    return new BaseResponse(HttpStatus.OK, MESSAGE.MISSION_FOUND, missions);
  }

  // get mission details (needs mission id)
  async getMissionDetail(
    missionId: number,
  ): Promise<BaseResponse<GetAllMissionListDto>> {
    const mission = await this.prisma.mission.findUnique({
      where: { id: missionId },
    });

    if (!mission) {
      throw new HttpException(
        new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.MISSION_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    return new BaseResponse(HttpStatus.OK, MESSAGE.MISSION_FOUND, mission);
  }

  // create user_mission
  async crateUserMission(
    userId: number,
    createUserMissionDto: CreateUserMissionDto,
  ): Promise<BaseResponse<CreateUserMissionDto>> {
    try {
      const alreadyExists = await this.prisma.userMission.findFirst({
        where: {
          userId: userId,
          missionId: createUserMissionDto.missionId,
        },
      });

      if (alreadyExists) {
        return new BaseResponse(
          HttpStatus.CONFLICT,
          MESSAGE.USER_MISSION_SELECTED,
        );
      }

      const userMission = await this.prisma.userMission.create({
        data: {
          userId: userId,
          missionId: createUserMissionDto.missionId,
          isCompleted: createUserMissionDto.isCompleted,
        },
      });

      return new BaseResponse(
        HttpStatus.OK,
        MESSAGE.USER_MISSION_CREATED,
        userMission,
      );
    } catch (err) {
      throw new HttpException(
        new BaseResponse(
          HttpStatus.BAD_REQUEST,
          MESSAGE.USER_MISSION_NOT_CREATED,
          err,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // get current user_mission
  async getCurrentUserMission(
    userId: number,
  ): Promise<BaseResponse<GetCurrentUserMissionDto>> {
    try {
      const userMissions = await this.prisma.userMission.findMany({
        where: { userId: userId },
        include: { mission: true },
        take: 2,
      });

      const resultUserMission: GetCurrentUserMissionDto = {
        userId: userId,
        userMissions: userMissions.map((um) => ({
          missionId: um.missionId,
          missionName: um.mission.missionName,
          missionIcon: um.mission.missionIcon,
          isCompleted: um.isCompleted,
        })),
      };

      return new BaseResponse(
        HttpStatus.OK,
        MESSAGE.USER_MISSION_FOUND,
        resultUserMission,
      );
    } catch (err) {
      throw new HttpException(
        new BaseResponse(
          HttpStatus.BAD_REQUEST,
          MESSAGE.USER_MISSION_NOT_FOUND,
          err,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // complete mission (at user_mission)
  async completeUserMission(
    userMissionId: number,
  ): Promise<BaseResponse<CompleteMissionDto>> {
    try {
      const mission = await this.prisma.userMission.update({
        where: { id: userMissionId },
        data: { isCompleted: true },
      });

      return new BaseResponse(
        HttpStatus.OK,
        MESSAGE.USER_MISSION_UPDATED,
        mission,
      );
    } catch (err) {
      throw new HttpException(
        new BaseResponse(
          HttpStatus.BAD_REQUEST,
          MESSAGE.USER_MISSION_NOT_UPDATED,
          err,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // delete user_mission
  async deleteUserMission(userMissionId: number) {
    try {
      const alreadyExists = await this.prisma.userMission.findUnique({
        where: { id: userMissionId },
      });

      if (!alreadyExists) {
        return new BaseResponse(
          HttpStatus.CONFLICT,
          MESSAGE.USER_MISSION_NOT_FOUND,
        );
      }

      await this.prisma.userMission.delete({
        where: { id: userMissionId },
      });

      return new BaseResponse(HttpStatus.OK, MESSAGE.USER_MISSION_DELETED);
    } catch (err) {
      throw new HttpException(
        new BaseResponse(
          HttpStatus.BAD_REQUEST,
          MESSAGE.USER_MISSION_NOT_DELETED,
          err,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
