import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../domain/entities/cliente.entity';
import { ClienteRepository } from './repositories/cliente.repository';
import { Conta } from '../domain/entities/conta.entity';
import { Gerente } from '../domain/entities/gerente.entity';
import { ContaRepository } from './repositories/conta.repository';
import { GerenteRepository } from './repositories/gerente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Conta, Gerente])], // Configura o TypeORM para usar as entidades necessárias
  providers: [
    ClienteRepository,
    { provide: 'IClienteRepository', useClass: ClienteRepository }, // Implementação da interface do domínio
    ContaRepository,
    { provide: 'IContaRepository', useClass: ContaRepository },
    GerenteRepository,
    { provide: 'IGerenteRepository', useClass: GerenteRepository },
  ],
  exports: ['IClienteRepository', 'IContaRepository', 'IGerenteRepository'], // Exporta o token para outros módulos
})
export class InfrastructureModule {}
