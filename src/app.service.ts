import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getReprogramaBank(): string {
    return 'Reprograma Bank By Angelina Siqueira';
  }
}
