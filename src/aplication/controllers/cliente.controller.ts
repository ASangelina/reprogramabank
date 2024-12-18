import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClienteService } from '../../domain/services/cliente.service';
import { ICreateClienteDto } from '../dtos/cliente.dto.create';
import { IUpdateClienteDto } from '../dtos/cliente.dto.update';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {
  }

  @Post('criar')
  createCliente(@Body() body: { clienteDTO: ICreateClienteDto }) {
    try {
      console.log(body.clienteDTO);
      return this.clienteService.createCliente(body.clienteDTO);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get()
  getAll() {
    try {
      return this.clienteService.getAllClientes();
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    try {
      return this.clienteService.getClienteById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    try {
      return this.clienteService.deleteClienteById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Put(':id')
  updateCliente(
    @Param('id') id: string,
    @Body() body: { cliente: IUpdateClienteDto },
  ) {
    try {
      return this.clienteService.updateCliente(id, body.cliente);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Patch('/edit/:id')
  patchCliente(
    @Param('id') id: string,
    @Query() updates: Partial<IUpdateClienteDto>,
  ) {
    try {
      return this.clienteService.patchCliente(id, updates);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
