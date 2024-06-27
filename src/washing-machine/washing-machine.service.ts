import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { Machine } from './washing-machine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WashingMachineService {
/*   private machines = [
    { id: 1, inUse: false, remainingTime: 0 },
    { id: 2, inUse: false, remainingTime: 0 },
  ]; */

  constructor(
    @InjectRepository(Machine)
    private Machines: Repository<Machine>
  ) {
    this.Counttime();
  }

  async PutCoin(coin: number, id: number): Promise<string> {
    const machine = await this.Machines.findOne({ where: { id } });

    if (!machine){
      throw new NotFoundException(`ไม่พบเครื่องซักผ่้า ${id} ที่ท่านเลือกกรุณาลองใหม่อีกครั้ง`, { cause: new Error(), description: 'not found' })
    }
    if (machine.inUse){
      throw new BadRequestException(`เครื่องซักผ่้า ${id} กำลังใช้งานเวลาคงเหลือ ${machine.remainingTime}`, { cause: new Error(), description: 'Bad Request' })
    }
    if (coin != 10){
      throw new BadRequestException('กรุณาหยอกเหรียญ 10 บาทจำนวน 1 เหรียญเพื่อใช้บริการเครื่องซักผ้า', { cause: new Error(), description: 'Bad Request' })
    }

    machine.inUse = true;
    machine.remainingTime = 60; // หน่วยนาที
    this.Machines.save(machine);

    return `ขอบคุณที่ใช้บริการเครื่องซักผ้า ${machine.id} จะมีกำหนดการแล้วเสร็จในอีก ${machine.remainingTime} นาที`;
  }

  async CheckStatus() {
    /* return this.machines.filter(machine => !machine.inUse); */
    return this.Machines.find();
  }

  private async Counttime() {
    setInterval(async () => {
      const machines = await this.Machines.find();
      for (const machine of machines) {
        if (machine.inUse && machine.remainingTime > 0) {
          machine.remainingTime -= 1;
          if (machine.remainingTime <= 0) {
            machine.inUse = false;
            machine.remainingTime = 0;
            await this.Machines.save(machine);
            this.SendNoti(machine.id);
          } else {
            await this.Machines.save(machine);
          }
        }
      }
    }, 60000);
  }

  private readonly lineNotifyUrl = 'https://notify-api.line.me/api/notify';
  private readonly token = 'Line Token';

  private async SendNoti(id: number) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${this.token}`,
    };
    const data = new URLSearchParams();
    data.append(
      'message',
      `เครื่องซักผ้า ${id} เสร็จสิ้นการใช้งานแล้ว กรุณามารับผ้าของคุณด้วย :)`,
    );

    try {
      const response = await axios.post(this.lineNotifyUrl, data, { headers });
      console.log(
        `Notification sent: ${response.status} ${response.statusText}`,
      );
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
