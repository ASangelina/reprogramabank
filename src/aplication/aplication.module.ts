import { DomainModule } from '../domain/domain.module';
import { ClienteController } from './controllers/cliente.controller';
import { Module } from '@nestjs/common';
import { ContaController } from './controllers/conta.controller';
import { GerenteController } from './controllers/gerente.controller';

@Module({
  imports: [DomainModule], // Importa o módulo de domínio
  controllers: [ClienteController, ContaController, GerenteController],
  providers: [],
})
export class ApplicationModule {}
