import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class FibonacciService {

    CalFibonacci(num: number): { fibonacci: number[], sum: number }{
        if (num < 0 || num > 100) {
            throw new BadRequestException('กรุณาใส่ค่าตัวเลขในช่วงระหว่าง 1 - 100', { cause: new Error(), description: 'Bad Request' })
        }
        let fibonacci: number[] =[]

        let a=0, b=1, sum=0

        for (let i = 0; i < num; i++) {
            fibonacci.push(a);
            sum += a;
            [a, b] = [b, a + b];

          }
        return {fibonacci, sum} 
    }
}
