import { Gerente } from '../entities/gerente.entity';

export interface IGerenteRepository {
  findAll(): Promise<Gerente[]>;
  save(gerente: Gerente): Promise<Gerente>;
  findById(id: string): Promise<Gerente | null>;
  delete(id: string): Promise<boolean>;
}
