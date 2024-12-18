import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IContaRepository } from '../../domain/interfaces/conta.interface';
import { Conta } from '../../domain/entities/conta.entity';

@Injectable()
export class ContaRepository implements IContaRepository {
  constructor(
    @InjectRepository(Conta)
    private readonly contaRepository: Repository<Conta>,
  ) {}

  async findAll(): Promise<Conta[]> {
    return await this.contaRepository.find({ relations: ['clientes'] });
  }

  async findById(id: string): Promise<Conta | null> {
    return this.contaRepository.findOne({
      where: { id },
      relations: ['clientes'],
    });
  }

  async save(conta: Conta): Promise<Conta> {
    return await this.contaRepository.save(conta);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.contaRepository.delete(id);
    return result.affected > 0;
  }
}
