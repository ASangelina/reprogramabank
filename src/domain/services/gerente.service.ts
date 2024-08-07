import { Injectable } from '@nestjs/common';
import { Gerente } from '../entities/gerente.model';
import { ICreateGerenteDto } from "../../aplication/dtos/gerente.dto.create";
import { IUpdateGerenteDto } from "../../aplication/dtos/gerente.dto.update";

@Injectable()
export class GerenteService {
  private gerentes: Gerente[] = [];

  createGerente(gerente: ICreateGerenteDto): Gerente {
    const newGerente = new Gerente(gerente.nomeCompleto, gerente.clientes);
    this.gerentes.push(newGerente);
    return newGerente;
  }

  getAllGerentes(): Gerente[] {
    return this.gerentes;
  }

  getGerenteById(id: string): Gerente {
    return this.gerentes.find((gerente) => gerente.id === id);
  }

  deleteGerenteById(id: string): void {
    this.gerentes = this.gerentes.filter((gerente) => gerente.id !== id);
  }

  updateGerente(id: string, gerenteAtualizado: IUpdateGerenteDto): Gerente {
    const gerente = this.getGerenteById(id);
    if (!gerente) {
      return null;
    }

    gerente.nomeCompleto = gerenteAtualizado.nomeCompleto;

    return gerente;
  }
}
