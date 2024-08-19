import { Conta } from '../entities/conta.entity';

export interface IContaRepository {
  findAll(): Promise<Conta[]>;
  save(conta: Conta): Promise<Conta>;
  findById(id: string): Promise<Conta | null>;
  delete(id: string): Promise<boolean>;
}
