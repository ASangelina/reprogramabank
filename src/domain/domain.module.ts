import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './services/cliente.service';
import { InfrastructureModule } from '../infrastructure/infrasctructure.module';
import { Conta } from './entities/conta.entity';
import { Gerente } from './entities/gerente.entity';
import { ContaService } from './services/conta.service';
import { GerenteService } from './services/gerente.service';

@Module({
  imports: [
    InfrastructureModule,
    TypeOrmModule.forFeature([Cliente, Conta, Gerente]),
  ],
  providers: [ClienteService, ContaService, GerenteService],
  exports: [ClienteService, ContaService, GerenteService],
})
export class DomainModule {}
