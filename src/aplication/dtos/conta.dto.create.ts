import { Cliente } from '../../domain/entities/cliente.entity';

export interface ICreateContaDto {
  saldo: number;
  tipo: string;
  cliente: Cliente;
}
