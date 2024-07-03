import { Cliente } from '../cliente/cliente.model';
import { ContaBancaria } from './conta.model';

export class ContaPoupanca extends ContaBancaria {
  constructor(
    saldo: number,
    cliente: Cliente,
    public taxaJuros: number,
  ) {
    super(saldo, cliente, 'poupanca');
  }

  calcularTaxa(): number {
    return this.saldo * this.taxaJuros;
  }
}
