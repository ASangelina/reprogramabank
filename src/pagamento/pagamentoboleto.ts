import { Pagamento } from './pagamento.model';

export class PagamentoBoleto implements Pagamento {
  private numeroBoleto: string;

  constructor(numeroBoleto: string) {
    this.numeroBoleto = numeroBoleto;
  }

  pagar(valor: number): void {
    console.log(
      `Iniciando pagamento de R$ ${valor.toFixed(2)} via boleto bancário com número: ${this.numeroBoleto}`,
    );
    console.log(
      `Pagamento de R$ ${valor.toFixed(2)} via boleto bancário realizado com sucesso.`,
    );
  }
}
