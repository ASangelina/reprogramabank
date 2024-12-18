import { IPagamento } from '../interfaces/pagamento.interface';

export class Pagamentopix implements IPagamento {
  private chavePIX: string;

  constructor(chavePIX: string) {
    this.chavePIX = chavePIX;
  }

  pagar(valor: number): void {
    console.log(
      `Iniciando pagamento de R$ ${valor.toFixed(2)} via PIX para a chave: ${this.chavePIX}`,
    );
    console.log(
      `Pagamento de R$ ${valor.toFixed(2)} via PIX realizado com sucesso.`,
    );
  }
}
