import { Cliente } from '../../domain/entities/cliente.entity';

export interface ICreateGerenteDto {
  nomeCompleto: string;
  clientes: Cliente[];
}
