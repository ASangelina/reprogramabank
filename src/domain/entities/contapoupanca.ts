import { ContaBancaria } from './conta.model';
import { Cliente } from "./cliente.entity";

export class Contapoupanca extends ContaBancaria {
  private taxaJuros;
  constructor(saldo: number, cliente: Cliente) {
    super(saldo, cliente, 'poupanca');
    this.taxaJuros = 2;
  }

  calcularTaxa(): number {
    return this.saldo * this.taxaJuros;
  }

  transferir(destino: ContaBancaria, valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      destino.depositar(valor);
    }
  }
}
