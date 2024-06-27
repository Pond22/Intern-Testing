import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { FibonacciController } from './fibonacci/fibonacci.controller';
import { FibonacciService } from './fibonacci/fibonacci.service'; */
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { WashingMachineModule } from './washing-machine/washing-machine.module';

@Module({
  imports: [FibonacciModule, WashingMachineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
