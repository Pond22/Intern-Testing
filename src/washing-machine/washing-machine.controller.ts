import { Controller, Get, Post, Param, Body, Query, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { WashingMachineService } from './washing-machine.service';

@Controller('washing-machine')
export class WashingMachineController {
    constructor(private readonly washingmachineservice: WashingMachineService) {}

    @Get('status')
    check(){
        return this.washingmachineservice.CheckStatus();
    }

    @Post()
    UseMachine(@Query('id', ParseIntPipe) id: number, @Query('coin', ParseIntPipe) coin: number){
        const process = this.washingmachineservice.PutCoin(coin, id);
        return process;
    }
    
}
