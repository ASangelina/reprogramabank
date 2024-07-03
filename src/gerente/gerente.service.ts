import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.model';

@Injectable()
export class GerenteService {
  private gerentes: Gerente[] = [];

  createGerente(gerente: Gerente): Gerente {
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

  updateGerente(id: string, gerenteAtualizado: Gerente): Gerente {
    const gerente = this.getGerenteById(id);
    if (!gerente) {
      return null;
    }

    gerente.nomeCompleto = gerenteAtualizado.nomeCompleto;

    return gerente;
  }
}
