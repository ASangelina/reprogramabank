import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Cliente } from './cliente.entity';

@Entity('Gerente')
export class Gerente {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public nomeCompleto: string;

  @OneToOne(() => Cliente, {
    nullable: true,
  })
  @JoinColumn()
  public clientes: Cliente[];


  constructor(id: string, nomeCompleto: string, clientes: Cliente[]) {
    this.id = uuidv4();
    this.nomeCompleto = nomeCompleto;
    this.clientes = clientes;
  }
}
