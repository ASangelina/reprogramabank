import { IPagamento } from '../interfaces/pagamento.interface';
import { Pagamentopix } from '../entities/pagamentopix';
import { Pagamentoboleto } from '../entities/pagamentoboleto';
import { TipoPagamento } from './tipo-pagamento.enum';

export class PagamentoFactory {
  static criarPagamento(
    tipo: TipoPagamento,
    chaveOuNumero: string,
  ): IPagamento {
    if (tipo === TipoPagamento.PIX) {
      return new Pagamentopix(chaveOuNumero);
    } else if (tipo === TipoPagamento.BOLETO) {
      return new Pagamentoboleto(chaveOuNumero);
    } else {
      throw new Error('Tipo de pagamento inválido.');
    }
  }
}
