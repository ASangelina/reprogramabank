import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './services/cliente.service';
import { InfrastructureModule } from '../infrastructure/infrasctructure.module';

@Module({
  imports: [InfrastructureModule, TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class DomainModule {}
