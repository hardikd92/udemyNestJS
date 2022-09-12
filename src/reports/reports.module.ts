import { Module } from '@nestjs/common';
import { isMapIterator } from 'util/types';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { report } from './report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([report])],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
