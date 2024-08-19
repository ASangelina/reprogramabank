import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IGerenteRepository } from '../../domain/interfaces/gerente.interface';
import { Gerente } from '../../domain/entities/gerente.entity';

@Injectable()
export class GerenteRepository implements IGerenteRepository {
  constructor(
    @InjectRepository(Gerente)
    private readonly gerenteRepository: Repository<Gerente>,
  ) {}

  async findAll(): Promise<Gerente[]> {
    return await this.gerenteRepository.find({ relations: ['clientes'] });
  }

  async findById(id: string): Promise<Gerente | null> {
    return this.gerenteRepository.findOne({
      where: { id },
      relations: ['clientes'],
    });
  }

  async save(gerente: Gerente): Promise<Gerente> {
    return await this.gerenteRepository.save(gerente);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.gerenteRepository.delete(id);
    return result.affected > 0;
  }
}
