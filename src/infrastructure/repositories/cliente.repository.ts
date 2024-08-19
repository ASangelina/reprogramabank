import { Cliente } from 'src/domain/entities/cliente.entity';
import { IClienteRepository } from '../../domain/interfaces/cliente.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteRepository implements IClienteRepository {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find({
      relations: ['contas', 'gerentes'],
    });
  }

  async save(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  findById(id: string): Promise<Cliente | null> {
    return this.clienteRepository.findOne({
      where: { id },
      relations: ['contas', 'gerentes'],
    });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.clienteRepository.delete(id);
    return result.affected > 0;
  }
}
