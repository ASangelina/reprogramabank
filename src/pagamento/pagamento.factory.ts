import { Pagamento } from './pagamento.model';
import { PagamentoPIX } from './pagamentopix';
import { PagamentoBoleto } from './pagamentoboleto';

export class PagamentoFactory {
  static criarPagamento(
    tipo: 'pix' | 'boleto',
    chaveOuNumero: string,
  ): Pagamento {
    if (tipo === 'pix') {
      return new PagamentoPIX(chaveOuNumero);
    } else if (tipo === 'boleto') {
      return new PagamentoBoleto(chaveOuNumero);
    } else {
      throw new Error('Tipo de pagamento inválido.');
    }
  }
}
