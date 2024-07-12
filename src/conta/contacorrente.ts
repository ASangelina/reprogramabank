import { ContaBancaria } from './conta.model';
import { Cliente } from '../cliente/cliente.model';

export class ContaCorrente extends ContaBancaria {
  private chequeEspecial;
  constructor(saldo: number, cliente: Cliente) {
    super(saldo, cliente, 'corrente');
    this.chequeEspecial = 0;
  }
  transferir(destino: ContaBancaria, valor: number): void {
    if (valor <= this.saldo + this.chequeEspecial) {
      this.saldo -= valor;
      destino.depositar(valor);
    }
  }
}
