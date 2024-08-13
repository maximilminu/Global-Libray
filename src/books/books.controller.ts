import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
  HttpException,
  Query,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { query } from 'express';

@Controller('/api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    try {
      const book = await this.booksService.create(createBookDto);
      return book;
    } catch (error) {
      console.error('Error creating book:', error.message || error);
      throw new HttpException(
        {
          error: error.message || 'Error creating book',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(): Promise<Book[]> {
    try {
      return await this.booksService.findAll();
    } catch (error) {
      console.error('Error getting all books:', error.message || error);
      throw new HttpException(
        {
          error: error.message || 'Error getting all book',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const bookData = await this.booksService.findOne(id);
      return bookData;
    } catch (error) {
      console.error('Error getting book:', error.message || error);
      throw new HttpException(
        {
          error: error.message || 'Error getting book',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
    try {
      return await this.booksService.update(+id, updateBookDto);
    } catch (error) {
      console.log('ERROR: ', error);
      throw new HttpException(
        {
          error: error.message || 'Error updating the book',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.booksService.remove(id);
    if (!result) {
      throw new NotFoundException(`BOOK WITH ID ${id} NOT FOUND`);
    }
    return { message: `BOOK WITH ID ${id} SUCCESSFULLY DELETED` };
  }
}
