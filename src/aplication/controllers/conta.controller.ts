import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContaService } from '../../domain/services/conta.service';
import { Conta } from '../../domain/entities/conta.entity';
import { ICreateContaDto } from '../dtos/conta.dto.create';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post('criar')
  createConta(@Body() body: { contaDTO: ICreateContaDto }) {
    try {
      console.log(body.contaDTO);
      return this.contaService.createConta(body.contaDTO);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get()
  getAll() {
    try {
      return this.contaService.getAllContas();
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    try {
      return this.contaService.getContaById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    try {
      return this.contaService.deleteContaById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Put(':id')
  updateConta(@Param('id') id: string, @Body() body: { conta: Conta }) {
    try {
      return this.contaService.updateConta(id, body.conta);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
