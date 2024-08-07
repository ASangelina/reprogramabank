import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './domain/services/cliente.service';
import { ClienteController } from './aplication/controllers/cliente.controller';
import { GerenteService } from './domain/services/gerente.service';
import { GerenteController } from './aplication/controllers/gerente.controller';
import { ContaService } from './domain/services/conta.service';
import { ContaController } from './aplication/controllers/conta.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ClienteController,
    GerenteController,
    ContaController,
  ],
  providers: [AppService, ClienteService, GerenteService, ContaService],
})
export class AppModule {}
