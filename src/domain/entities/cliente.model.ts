import { v4 as uuidv4 } from 'uuid';
import { ContaBancaria } from './conta.model';
import { Gerente } from './gerente.model';

export class Cliente {
  nomeCompleto: string;
  id: string;
  endereco: string;
  telefone: string;
  contas: ContaBancaria[];
  gerente: Gerente;

  constructor(
    nomeCompleto: string,
    endereco: string,
    telefone: string,
    contas: ContaBancaria[],
    gerente: Gerente,
  ) {
    this.nomeCompleto = nomeCompleto;
    this.id = uuidv4();
    this.endereco = endereco;
    this.telefone = telefone;
    this.contas = contas;
    this.gerente = gerente;
  }

  abrirConta(conta: ContaBancaria): void {
    this.contas.push(conta);
  }

  fecharConta(conta: ContaBancaria): void {
    this.contas = this.contas.filter((c) => c !== conta);
  }

  mudarTipoConta(conta: ContaBancaria, novoTipo: string): void {
    conta.tipo = novoTipo;
  }
}
