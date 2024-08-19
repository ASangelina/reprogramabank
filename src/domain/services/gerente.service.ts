import { Inject, Injectable } from '@nestjs/common';
import { ICreateGerenteDto } from '../../aplication/dtos/gerente.dto.create';
import { IUpdateGerenteDto } from '../../aplication/dtos/gerente.dto.update';
import { Gerente } from '../entities/gerente.entity';
import { IGerenteRepository } from '../interfaces/gerente.interface';

@Injectable()
export class GerenteService {
  private gerentes: Gerente[] = [];

  constructor(
    @Inject('IGerenteRepository')
    private readonly gerenteRepository: IGerenteRepository,
  ) {}

  async createGerente(gerente: ICreateGerenteDto): Promise<Gerente> {
    const newGerente = new Gerente(gerente.nomeCompleto, gerente.clientes);
    this.gerentes.push(newGerente);
    return await this.gerenteRepository.save(newGerente);
  }

  async getAllGerentes(): Promise<Gerente[]> {
    return await this.gerenteRepository.findAll();
  }

  async getGerenteById(id: string): Promise<Gerente> {
    return await this.gerenteRepository.findById(id);
  }

  async deleteGerenteById(id: string): Promise<boolean> {
    return await this.gerenteRepository.delete(id);
  }

  async updateGerente(id: string, gerenteAtualizado: IUpdateGerenteDto): Promise<Gerente | null> {
    const gerente = await this.gerenteRepository.findById(id);
    if (!gerente) {
      return null;
    }

    gerente.nomeCompleto = gerenteAtualizado.nomeCompleto;

    return await this.gerenteRepository.save(gerente);
  }
}
