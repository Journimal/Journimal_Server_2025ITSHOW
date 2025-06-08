import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { GetAllMissionListDto } from './dto/get-all-mission-list.dto';
import { CreateUserMissionDto } from './dto/create-mission.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  // get all missions list
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllMissionList(): Promise<BaseResponse<GetAllMissionListDto[]>> {
    return this.missionService.getAllMissionList();
  }

  // create user_mission
  @Post('/choose')
  @UseGuards(JwtAuthGuard)
  crateUserMission(
    @CurrentUser() user: User,
    @Body() createUserMissionDto: CreateUserMissionDto,
  ): Promise<BaseResponse<CreateUserMissionDto>> {
    return this.missionService.crateUserMission(user.id, createUserMissionDto);
  }

  // get current user_mission
  @Get('/current')
  @UseGuards(JwtAuthGuard)
  getCurrentUserMission(@CurrentUser() user: User) {
    return this.missionService.getCurrentUserMission(user.id);
  }

  // get mission details (needs mission id)
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getMissionDetail(
    @Param('id', ParseIntPipe) missionId: number,
  ): Promise<BaseResponse<GetAllMissionListDto>> {
    return this.missionService.getMissionDetail(missionId);
  }

  // complete mission (at user_mission)
  @Post(':id')
  @UseGuards(JwtAuthGuard)
  completeUserMission(@Param('id', ParseIntPipe) userMissionId: number) {
    return this.missionService.completeUserMission(userMissionId);
  }

  // delete user_mission
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUserMission(@Param('id', ParseIntPipe) userMissionId: number) {
    return this.missionService.deleteUserMission(userMissionId);
  }
}
