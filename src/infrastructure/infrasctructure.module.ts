import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../domain/entities/cliente.entity';
import { ClienteRepository } from './repositories/cliente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])], // Configura o TypeORM para usar as entidades necessárias
  providers: [
    ClienteRepository,
    { provide: 'IClienteRepository', useClass: ClienteRepository }, // Implementação da interface do domínio
  ],
  exports: ['IClienteRepository'], // Exporta o token para outros módulos
})
export class InfrastructureModule {}
