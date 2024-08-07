import { Cliente } from './cliente.model';
import { v4 as uuidv4 } from 'uuid';

export abstract class ContaBancaria {
  private _id: string;
  private _cliente: Cliente;
  private _tipo: string;
  private _saldo: number;

  constructor(saldo: number, cliente: Cliente, tipo: string) {
    this._id = uuidv4();
    this._saldo = saldo;
    this._cliente = cliente;
    this._tipo = tipo;
  }
  depositar(valor: number): void {
    this._saldo += valor;
  }

  sacar(valor: number): void {
    if (this._saldo >= valor) {
      this._saldo -= valor;
    } else {
      throw new Error('Saldo insuficiente');
    }
  }

  verificarSaldo(): number {
    return this._saldo;
  }

  abstract transferir(destino: ContaBancaria, valor: number): void;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get tipo(): string {
    return this._tipo;
  }

  set tipo(value: string) {
    this._tipo = value;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }
}
