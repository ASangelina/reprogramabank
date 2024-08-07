import { IPagamento } from '../../domain/interfaces/pagamento.interface';
import { Pagamentopix } from '../../domain/entities/pagamentopix';
import { Pagamentoboleto } from '../../domain/entities/pagamentoboleto';

export class PagamentoFactory {
  static criarPagamento(
    tipo: 'pix' | 'boleto',
    chaveOuNumero: string,
  ): IPagamento {
    if (tipo === 'pix') {
      return new Pagamentopix(chaveOuNumero);
    } else if (tipo === 'boleto') {
      return new Pagamentoboleto(chaveOuNumero);
    } else {
      throw new Error('Tipo de pagamento inválido.');
    }
  }
}
