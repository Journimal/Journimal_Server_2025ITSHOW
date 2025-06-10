import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { MESSAGE } from 'src/common/constants/message';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { Trip } from '@prisma/client';

@Injectable()
export class TripService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTrip(userId: number): Promise<BaseResponse<Trip[]>> {
    try {
      const trips = await this.prisma.trip.findMany({
        where: { userId },
        include: {
          lastAnimal: true,
          UserMission: {
            include: {
              mission: { select: { missionName: true, missionIcon: true } },
            },
          },
        },
      });

      return new BaseResponse(HttpStatus.OK, MESSAGE.TRIP_FOUND, trips);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        new BaseResponse(HttpStatus.BAD_REQUEST, MESSAGE.TRIP_NOT_FOUND, err),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createTrip(
    createTripDto: CreateTripDto,
    userId: number,
  ): Promise<BaseResponse<Trip>> {
    try {
      const vuAnimals = await this.prisma.animal.findMany({
        where: { aniLevel: 'VU' },
      });
      const randomAnimal = vuAnimals[Math.floor(Math.random() * 3)];

      const trip = await this.prisma.trip.create({
        data: {
          departure: createTripDto.departure,
          arrival: createTripDto.arrival,
          firstDay: new Date(createTripDto.firstDay),
          lastDay: new Date(createTripDto.lastDay),
          user: { connect: { id: userId } },
          lastAnimal: { connect: { id: randomAnimal?.id } },
        },
        include: {
          lastAnimal: true,
        },
      });

      return new BaseResponse(HttpStatus.OK, MESSAGE.TRIP_CREATED, trip);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        new BaseResponse(HttpStatus.BAD_REQUEST, MESSAGE.TRIP_NOT_CREATED, err),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteTrip(tripId: number) {
    try {
      await this.prisma.trip.delete({ where: { id: tripId } });
    } catch (err) {
      console.log(err);
    }
  }

  async updateTripByLevel(userId: number, tripId: number, round: number) {
    try {
      // round에 맞게 유저가 완료한 미션의 개수 카운트
      const completedMission = await this.prisma.userMission.count({
        where: {
          isCompleted: true,
          userId,
          round,
        },
      });

      type LevelCondition = { required: number; level: string };

      // 각 라운드별 기준 설정
      const levelConditions: Record<number, LevelCondition> = {
        1: { required: 2, level: 'VU' },
        2: { required: 4, level: 'EN' },
        3: { required: 6, level: 'CE' },
      };

      const condition = levelConditions[round];

      if (!condition) {
        return new BaseResponse(
          HttpStatus.BAD_REQUEST,
          'Invalid round(you should 1 or 2 or 3)',
        );
      }

      // 레벨업 조건에 맞지 않을 때
      if (completedMission < condition.required) {
        return new BaseResponse(
          HttpStatus.BAD_REQUEST,
          'Please complete more missions',
        );
      }

      const trip = await this.prisma.trip.findUnique({ where: { id: tripId } });
      if (!trip) {
        return new BaseResponse(HttpStatus.NOT_FOUND, MESSAGE.TRIP_NOT_FOUND);
      }

      // 어떤 레벨을 적용할지 결정
      const levelOrder = { NONE: 0, VU: 1, EN: 2, CE: 3 };
      if (levelOrder[condition.level] <= levelOrder[trip.level]) {
        return new BaseResponse(
          HttpStatus.BAD_REQUEST,
          `이미 ${condition.level} 이상입니다`,
        );
      }

      // 맞는 레벨의 동물 조회
      const candidates = await this.prisma.animal.findMany({
        where: { aniLevel: condition.level },
      });

      // 각 레벨에서 랜덤 동물 배정하기
      const randomAnimal =
        candidates[Math.floor(Math.random() * candidates.length)];

      // trip에 레벨업된 animal 저장, UserAnimal 생성을 트랜잭션으로 관리
      const [updatedTrip] = await this.prisma.$transaction([
        this.prisma.trip.update({
          where: { id: tripId },
          data: {
            lastAnimal: { connect: { id: randomAnimal.id } },
            level: condition.level,
          },
          include: { lastAnimal: true },
        }),
        this.prisma.userAnimal.create({
          data: {
            userId: userId,
            tripId: tripId,
            animalId: randomAnimal.id,
            count: 1,
          },
        }),
      ]);

      return new BaseResponse(HttpStatus.OK, MESSAGE.TRIP_UPDATED, updatedTrip);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        new BaseResponse(HttpStatus.BAD_REQUEST, MESSAGE.TRIP_NOT_UPDATED, err),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getTrip(userId: number, tripId: number) {
    try {
      const tripAnimals = await this.prisma.userAnimal.findMany({
        where: {
          userId: userId,
          tripId: tripId,
        },
        include: {
          animal: true,
        },
      });

      return new BaseResponse(HttpStatus.OK, MESSAGE.TRIP_FOUND, tripAnimals);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        new BaseResponse(HttpStatus.BAD_REQUEST, MESSAGE.TRIP_NOT_FOUND, err),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
