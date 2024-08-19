import { Inject, Injectable } from '@nestjs/common';
import { ContaFactory } from '../factories/conta.factory';
import { Conta } from '../entities/conta.entity';
import { IContaRepository } from '../interfaces/conta.interface';
import { ICreateContaDto } from '../../aplication/dtos/conta.dto.create';
import { Contacorrente } from "../entities/contacorrente";

@Injectable()
export class ContaService {
  private contas: Conta[] = [];

  constructor(
    @Inject('IContaRepository')
    private readonly contaRepository: IContaRepository,
  ) {}

  async createConta(conta: ICreateContaDto): Promise<Conta> {
    const newConta = ContaFactory.criarConta(conta);
    this.contas.push(newConta);
    return await this.contaRepository.save(newConta);
  }

  async getAllContas(): Promise<Conta[]> {
    return await this.contaRepository.findAll();
  }

  async getContaById(id: string): Promise<Conta> {
    return await this.contaRepository.findById(id);
  }

  async deleteContaById(id: string): Promise<boolean> {
    return await this.contaRepository.delete(id);
  }

  async updateConta(id: string, contaAtualizada: Conta): Promise<Conta | null> {
    const conta = await this.contaRepository.findById(id);
    if (!conta) {
      return null;
    }

    conta.tipo = contaAtualizada.tipo;

    return await this.contaRepository.save(conta);
  }
}
