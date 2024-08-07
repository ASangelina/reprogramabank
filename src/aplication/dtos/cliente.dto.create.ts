import { ContaBancaria } from "../../domain/entities/conta.model";
import { Gerente } from "../../domain/entities/gerente.model";

export interface ICreateClienteDto {
  nomeCompleto: string
  endereco: string;
  telefone: string;
  contas: ContaBancaria[];
  gerente: Gerente;
}
