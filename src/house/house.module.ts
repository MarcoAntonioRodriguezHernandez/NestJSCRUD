import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { House } from './house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([House])],
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule {}
