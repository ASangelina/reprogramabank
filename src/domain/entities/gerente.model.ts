import { v4 as uuidv4 } from 'uuid';

import { Cliente } from './cliente.model';
import { ContaBancaria } from './conta.model';
import { Contacorrente } from "./contacorrente";
import { Contapoupanca } from "./contapoupanca";

export class Gerente {
  nomeCompleto: string;
  id: string;
  clientes: Cliente[];

  constructor(nomeCompleto: string, clientes: Cliente[]) {
    this.nomeCompleto = nomeCompleto;
    this.id = uuidv4();
    this.clientes = clientes;
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter((c) => c !== cliente);
  }

  abrirConta(cliente: Cliente, tipoConta: string): void {
    let novaConta: ContaBancaria;
    if (tipoConta === 'corrente') {
      novaConta = new Contacorrente(0, cliente);
    } else if (tipoConta === 'poupanca') {
      novaConta = new Contapoupanca(0, cliente);
    }
    cliente.abrirConta(novaConta);
  }

  fecharConta(cliente: Cliente, conta: ContaBancaria): void {
    cliente.fecharConta(conta);
  }

  mudarTipoConta(
    cliente: Cliente,
    conta: ContaBancaria,
    novoTipo: string,
  ): void {
    cliente.mudarTipoConta(conta, novoTipo);
  }
}
