import { ContaBancaria } from '../../domain/entities/conta.model';
import { Contacorrente } from '../../domain/entities/contacorrente';
import { Contapoupanca } from '../../domain/entities/contapoupanca';

export class ContaFactory {
  static criarConta(conta: ContaBancaria): Contacorrente | Contapoupanca {
    if (conta.tipo === 'corrente') {
      return new Contacorrente(conta.saldo, conta.cliente);
    } else if (conta.tipo === 'poupanca') {
      return new Contapoupanca(conta.saldo, conta.cliente);
    } else {
      throw new Error(`Tipo de conta não suportado.`);
    }
  }
}
