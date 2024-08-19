import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Cliente } from './cliente.entity';

@Entity('contas')
export class Conta {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  public saldo: number;

  @Column()
  public tipo: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.contas, { eager: true })
  @JoinColumn({ name: 'clienteId' })
  public cliente: Cliente;

  constructor(saldo: number, tipo: string, cliente: Cliente) {
    this.id = uuidv4();
    this.saldo = saldo;
    this.tipo = tipo;
    this.cliente = cliente;
  }
}
