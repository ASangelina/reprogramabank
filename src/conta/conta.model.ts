import { Cliente } from '../cliente/cliente.model';
import { v4 as uuidv4 } from 'uuid';

export class ContaBancaria {
  id: string;
  saldo: number;
  cliente: Cliente;
  tipo: string;

  constructor(saldo: number, cliente: Cliente, tipo: string) {
    this.id = uuidv4();
    this.saldo = saldo;
    this.cliente = cliente;
    this.tipo = tipo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      throw new Error('Saldo insuficiente');
    }
  }

  verificarSaldo(): number {
    return this.saldo;
  }

  transferir(destino: ContaBancaria, valor: number): void {
    this.sacar(valor);
    destino.depositar(valor);
  }
}
