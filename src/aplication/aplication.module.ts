import { DomainModule } from '../domain/domain.module';
import { ClienteController } from './controllers/cliente.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DomainModule], // Importa o módulo de domínio
  controllers: [ClienteController],
  providers: [],
})
export class ApplicationModule {}
