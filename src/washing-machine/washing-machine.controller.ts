import { Controller, Get, Post, Param, Body, Query, BadRequestException, ParseIntPipe, HttpCode, Res  } from '@nestjs/common';
import { WashingMachineService } from './washing-machine.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('washing-machine')
@Controller('api/v1/washing-machine')
export class WashingMachineController {
    constructor(private readonly washingmachineservice: WashingMachineService) {}

    @Get('status')
    check(){
        return this.washingmachineservice.CheckStatus();
    }

    @Post()
    @HttpCode(200)
    async UseMachine(@Query('id', ParseIntPipe) id: number, @Query('coin', ParseIntPipe) coin: number, @Res() res: Response){
        const process = await this.washingmachineservice.PutCoin(coin, id);

        return res.status(200).json({
            'message': process,
        });
    }
    
}
