import {
  BadRequestException,
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
    try {
      return this.gerenteService.createGerente(body.gerenteDTO);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get()
  getAll() {
    try {
      return this.gerenteService.getAllGerentes();
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    try {
      return this.gerenteService.getGerenteById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    try {
      return this.gerenteService.deleteGerenteById(id);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }

  @Put(':id')
  updateGerente(
    @Param('id') id: string,
    @Body() body: { gerenteUpdateDTO: IUpdateGerenteDto },
  ) {
    try {
      return this.gerenteService.updateGerente(id, body.gerenteUpdateDTO);
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
