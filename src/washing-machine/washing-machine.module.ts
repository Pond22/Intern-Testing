import { Module } from '@nestjs/common';
import { WashingMachineController } from './washing-machine.controller';
import { WashingMachineService } from './washing-machine.service';
import { Machine } from './washing-machine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Machine])],
  controllers: [WashingMachineController],
  providers: [WashingMachineService]
})
export class WashingMachineModule {}
