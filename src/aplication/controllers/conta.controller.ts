import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put,} from '@nestjs/common';
import { ContaService } from '../../domain/services/conta.service';
import { ContaBancaria } from '../../domain/entities/conta.model';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post('criar')
  createConta(@Body() body: { contaBancaria: ContaBancaria }) {
    const conta = this.contaService.createConta(body.contaBancaria);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Conta criada com sucesso',
      data: conta,
    };
  }

  @Get()
  getAll() {
    const contas = this.contaService.getAllContas();

    return {
      statusCode: HttpStatus.OK,
      message: 'Todas as contas retornados com sucesso',
      data: contas,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const conta = this.contaService.getContaById(id);

    if (!conta) {
      throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Todas as contas retornados com sucesso',
      data: conta,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.contaService.deleteContaById(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: `Conta deletada com sucesso`,
    };
  }

  @Put(':id')
  updateConta(@Param('id') id: string, @Body() body: { contaBancaria: ContaBancaria }) {
    const conta = this.contaService.updateConta(id, body.contaBancaria);

    if (!conta) {
      throw new HttpException('conta não encontrada', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'conta atualizada com sucesso',
      data: conta,
    };
  }
}
