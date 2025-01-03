import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Conta } from './conta.entity';
import { Gerente } from './gerente.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public nomeCompleto: string;

  @Column()
  public endereco: string;

  @Column()
  public telefone: string;

  @OneToOne(() => Conta, {
    nullable: true,
  })
  @JoinColumn()
  public contas: Conta[];

  @ManyToOne(() => Gerente, {
    nullable: true,
  })
  @JoinColumn()
  public gerente: Gerente;

  constructor(
    nomeCompleto: string,
    endereco: string,
    telefone: string,
    contas: Conta[],
    gerente: Gerente,
  ) {
    this.id = uuidv4();
    this.nomeCompleto = nomeCompleto;
    this.endereco = endereco;
    this.telefone = telefone;
    this.contas = contas;
    this.gerente = gerente;
  }
}
