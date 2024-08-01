// src/child/child.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildController } from './child.controller';
import { ChildService } from './child.service';
import { Child } from './child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  controllers: [ChildController],
  providers: [ChildService]
})
export class ChildModule {}