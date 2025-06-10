import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { BaseResponse } from 'src/common/dto/base-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Trip, User } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  getAllTrip(@CurrentUser() user: User): Promise<BaseResponse<Trip[]>> {
    return this.tripService.getAllTrip(user.id);
  }

  @Post()
  createTrip(
    @Body() createTripDto: CreateTripDto,
    @CurrentUser() user: User,
  ): Promise<BaseResponse<Trip>> {
    return this.tripService.createTrip(createTripDto, user.id);
  }

  @Patch()
  updateTripByLevel(
    @CurrentUser() user: User,
    @Body('round', ParseIntPipe) round: number,
    @Body('tripId', ParseIntPipe) tripId: number,
  ) {
    return this.tripService.updateTripByLevel(user.id, tripId, round);
  }

  @Get(':tripId')
  getTrip(
    @CurrentUser() user: User,
    @Param('tripId', ParseIntPipe) tripId: number,
  ) {
    return this.tripService.getTrip(user.id, tripId);
  }

  @Delete(':id')
  deleteTrip(@Param('id') tripId: number) {
    return this.tripService.deleteTrip(tripId);
  }
}
