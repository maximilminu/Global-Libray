import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  BadRequestException,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('/api/authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    try {
      return await this.authorsService.create(createAuthorDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAuthorDto: CreateAuthorDto) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.authorsService.remove(id);
    if (!result) {
      throw new HttpException(
        {
          error: `AUTHOR WITH ID ${id} NOT FOUND`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: `AUTHOR WITH ID ${id} SUCCESSFULLY DELETED` };
  }
}
