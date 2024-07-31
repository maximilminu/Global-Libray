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
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

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
  findAll() {
    return this.booksService.findAll();
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
    return this.booksService.update(+id, updateBookDto);
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
