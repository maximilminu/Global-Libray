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
  async findAll() {
    return await this.authorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.authorsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAuthorDto: CreateAuthorDto,
  ) {
    try {
      return await this.authorsService.update(id, updateAuthorDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          error: 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
