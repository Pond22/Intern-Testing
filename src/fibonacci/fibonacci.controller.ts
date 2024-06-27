import { Controller, Get, Param, Body, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fibonacci')
@Controller('api/v1/fibonacci')
export class FibonacciController {
    constructor(private readonly Fibonacciservice: FibonacciService) {}

    @Get(":num")
    Fibonacci (@Param('num', ParseIntPipe) num: number){ 

        let { fibonacci , sum} = this.Fibonacciservice.CalFibonacci(num)

        return {
            'member-count': num,
            'sequence': fibonacci,
            'total': sum
          };
    }
    

}
