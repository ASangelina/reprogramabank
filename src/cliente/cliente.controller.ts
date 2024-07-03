import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Query,} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('criar')
  createCliente(@Body() body: { cliente: Cliente }) {
    const cliente = this.clienteService.createCliente(body.cliente);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Cliente criado com sucesso',
      data: cliente,
    };
  }

  @Get()
  getAll() {
    const Clientes = this.clienteService.getAllClientes();

    return {
      statusCode: HttpStatus.OK,
      message: 'Todas os clientes retornados com sucesso',
      data: Clientes,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const Cliente = this.clienteService.getClienteById(id);

    if (!Cliente) {
      throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Todos os clientes retornados com sucesso',
      data: Cliente,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.clienteService.deleteClienteById(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: `Cliente deletado com sucesso`,
    };
  }

  @Put(':id')
  updateCliente(@Param('id') id: string, @Body() body: { cliente: Cliente }) {
    const cliente = this.clienteService.updateCliente(id, body.cliente);

    if (!cliente) {
      throw new HttpException('cliente não encontrado', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'cliente atualizado com sucesso',
      data: cliente,
    };
  }

  @Patch('/edit/:id')
  patchCliente(@Param('id') id: string, @Query() updates: Partial<Cliente>) {
    const cliente = this.clienteService.patchCliente(id, updates);
    if (!cliente) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Cliente não encontrado',
      };
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Cliente atualizado com sucesso',
      data: cliente,
    };
  }
}
