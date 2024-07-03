import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.model';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];

  createCliente(cliente: Cliente): Cliente {
    const newCliente = new Cliente(
      cliente.nomeCompleto,
      cliente.endereco,
      cliente.telefone,
      cliente.contas,
      cliente.gerente,
    );
    this.clientes.push(newCliente);
    return newCliente;
  }

  getAllClientes(): Cliente[] {
    return this.clientes;
  }

  getClienteById(id: string): Cliente {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  deleteClienteById(id: string): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
  }

  updateCliente(id: string, clienteAtualizado: Cliente): Cliente {
    const cliente = this.getClienteById(id);
    if (!cliente) {
      return null;
    }

    cliente.nomeCompleto = clienteAtualizado.nomeCompleto;
    cliente.endereco = clienteAtualizado.endereco;
    cliente.telefone = clienteAtualizado.telefone;

    return cliente;
  }

  patchCliente(id: string, updates: Partial<Cliente>): Cliente {
    const cliente = this.getClienteById(id);
    if (!cliente) {
      return null;
    }

    const campos = ['nomeCompleto', 'endereco', 'telefone'];

    Object.keys(updates).forEach((key) => {
      if (campos.includes(key)) {
        cliente[key] = updates[key];
      }
    });

    return cliente;
  }
}
