import { Gerente } from '../../domain/entities/gerente.entity';
import { Conta } from '../../domain/entities/conta.entity';

export interface ICreateClienteDto {
  nomeCompleto: string;
  endereco: string;
  telefone: string;
  contas: Conta[];
  gerente: Gerente;
}
