import { IsDateString, IsString } from 'class-validator';

export class CreateTripDto {
  @IsString()
  departure: string;

  @IsString()
  arrival: string;

  @IsDateString()
  firstDay: Date;

  @IsDateString()
  lastDay: Date;
}
