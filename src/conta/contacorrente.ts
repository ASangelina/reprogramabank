import { ContaBancaria } from './conta.model';
import { Cliente } from '../cliente/cliente.model';

export class ContaCorrente extends ContaBancaria {
  constructor(
    saldo: number,
    cliente: Cliente,
    public chequeEspecial: number,
  ) {
    super(saldo, cliente, 'corrente');
  }
}
