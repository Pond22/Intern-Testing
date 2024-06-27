import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { FibonacciModule } from './fibonacci/fibonacci.module';
import { WashingMachineModule } from './washing-machine/washing-machine.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',  
      port: 3306,  
      username: 'newuser',  
      password: 'newpassword',  
      database: 'nestjs',  
      autoLoadEntities: true,
      synchronize: true,  
    }),

    FibonacciModule,
    WashingMachineModule],
      
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
