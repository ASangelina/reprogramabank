import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './domain/entities/cliente.entity';
import { ApplicationModule } from './aplication/aplication.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrasctructure.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'reprograma',
      username: 'teste',
      password: '123456',
      entities: [Cliente],
      synchronize: true,
    }),
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
