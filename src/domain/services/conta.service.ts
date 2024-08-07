import { Injectable } from '@nestjs/common';
import { ContaBancaria } from '../entities/conta.model';
import { ContaFactory } from '../../aplication/factories/conta.factory';

@Injectable()
export class ContaService {
  private contas: ContaBancaria[] = [];

  createConta(contaBancaria: ContaBancaria): ContaBancaria {
    const newConta = ContaFactory.criarConta(contaBancaria);
    this.contas.push(newConta);
    return newConta;
  }

  getAllContas(): ContaBancaria[] {
    return this.contas;
  }

  getContaById(id: string): ContaBancaria {
    return this.contas.find((gerente) => gerente.id === id);
  }

  deleteContaById(id: string): void {
    this.contas = this.contas.filter((conta) => conta.id !== id);
  }

  updateConta(id: string, contaAtualizada: ContaBancaria): ContaBancaria {
    const conta = this.getContaById(id);
    if (!conta) {
      return null;
    }

    conta.tipo = contaAtualizada.tipo;

    return conta;
  }
}
