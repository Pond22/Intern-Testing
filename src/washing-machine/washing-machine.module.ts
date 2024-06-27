import { Module } from '@nestjs/common';
import { WashingMachineController } from './washing-machine.controller';
import { WashingMachineService } from './washing-machine.service';

@Module({
  controllers: [WashingMachineController],
  providers: [WashingMachineService]
})
export class WashingMachineModule {}
