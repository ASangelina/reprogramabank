import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GerenteService } from '../../domain/services/gerente.service';
import { ICreateGerenteDto } from '../dtos/gerente.dto.create';
import { IUpdateGerenteDto } from '../dtos/gerente.dto.update';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post('criar')
  createGerente(@Body() body: { gerenteDTO: ICreateGerenteDto }) {
    const gerente = this.gerenteService.createGerente(body.gerenteDTO);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Gerente criado com sucesso',
      data: gerente,
    };
  }

  @Get()
  getAll() {
    const gerentes = this.gerenteService.getAllGerentes();

    return {
      statusCode: HttpStatus.OK,
      message: 'Todas os gerentes retornados com sucesso',
      data: gerentes,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const gerente = this.gerenteService.getGerenteById(id);

    if (!gerente) {
      throw new HttpException('Gerente não encontrado', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Todos os gerentes retornados com sucesso',
      data: gerente,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.gerenteService.deleteGerenteById(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: `Gerente deletado com sucesso`,
    };
  }

  @Put(':id')
  updateGerente(
    @Param('id') id: string,
    @Body() body: { gerenteUpdateDTO: IUpdateGerenteDto },
  ) {
    const gerente = this.gerenteService.updateGerente(
      id,
      body.gerenteUpdateDTO,
    );

    if (!gerente) {
      throw new HttpException('gerente não encontrado', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'gerente atualizado com sucesso',
      data: gerente,
    };
  }
}
