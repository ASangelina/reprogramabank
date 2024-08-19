import { Inject, Injectable } from '@nestjs/common';
import { ICreateClienteDto } from '../../aplication/dtos/cliente.dto.create';
import { IUpdateClienteDto } from '../../aplication/dtos/cliente.dto.update';
import { IClienteRepository } from '../interfaces/cliente.interface';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];

  constructor(
    @Inject('IClienteRepository')
    private readonly clienteRepository: IClienteRepository,
  ) {}

  async createCliente(cliente: ICreateClienteDto): Promise<Cliente> {
    const newCliente = new Cliente(
      cliente.nomeCompleto,
      cliente.endereco,
      cliente.telefone,
      cliente.contas,
      cliente.gerente,
    );
    this.clientes.push(newCliente);
    return await this.clienteRepository.save(newCliente);
  }

  async getAllClientes(): Promise<Cliente[]> {
    return await this.clienteRepository.findAll();
  }

  async getClienteById(id: string): Promise<Cliente> {
    return await this.clienteRepository.findById(id);
  }

  async deleteClienteById(id: string): Promise<boolean> {
    return await this.clienteRepository.delete(id);
  }

  async updateCliente(id: string, clienteAtualizado: IUpdateClienteDto): Promise<Cliente | null> {
    const cliente = await this.clienteRepository.findById(id);
    if (!cliente) {
      return null;
    }

    cliente.nomeCompleto = clienteAtualizado.nomeCompleto;
    cliente.endereco = clienteAtualizado.endereco;
    cliente.telefone = clienteAtualizado.telefone;

    return await this.clienteRepository.save(cliente);
  }

  async patchCliente(id: string, updates: Partial<IUpdateClienteDto>): Promise<Cliente> {
    const cliente = await this.clienteRepository.findById(id);
    if (!cliente) {
      return null;
    }

    const campos = ['nomeCompleto', 'endereco', 'telefone'];

    Object.keys(updates).forEach((key) => {
      if (campos.includes(key)) {
        cliente[key] = updates[key];
      }
    });

    return await this.clienteRepository.save(cliente);
  }
}
