import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Conta')
export class Conta {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public saldo: number;

  @Column()
  public tipo: string;

  constructor(saldo: number, tipo: string) {
    this.id = uuidv4();
    this.saldo = saldo;
    this.tipo = tipo;
  }
}
