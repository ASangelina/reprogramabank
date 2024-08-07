import { Cliente } from '../../domain/entities/cliente.model';

export interface ICreateGerenteDto {
  nomeCompleto: string;
  clientes: Cliente[];
}
