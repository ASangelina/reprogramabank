import { ContaBancaria } from './conta.model';
import { ContaCorrente } from './contacorrente';
import { ContaPoupanca } from './contapoupanca';

export class ContaFactory {
  static criarConta(conta: ContaBancaria): ContaCorrente | ContaPoupanca {
    if (conta.tipo === 'corrente') {
      return new ContaCorrente(conta.saldo, conta.cliente);
    } else if (conta.tipo === 'poupanca') {
      return new ContaPoupanca(conta.saldo, conta.cliente);
    } else {
      throw new Error(`Tipo de conta não suportado.`);
    }
  }
}
