import { Cliente } from '../entities/cliente.entity';

export interface IClienteRepository {
  findAll(): Promise<Cliente[]>;

  save(cliente: Cliente): Promise<Cliente>;
  findById(id: string): Promise<Cliente | null>;
  delete(id: string): Promise<boolean>;
}
