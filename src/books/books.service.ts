import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Publisher } from 'src/publishers/entities/publisher.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<any> {
    const { authorIds, ...bookData } = createBookDto;

    if (!bookData.id_publisher) {
      console.log('ERROR MUST INCLUDE A PUBLISHER');
      throw new Error('ERROR MUST INCLUDE A PUBLISHER');
    }

    const publishers = await this.publisherRepository.findOneBy({
      id: bookData.id_publisher,
    });

    if (!publishers) {
      throw new Error('MUST INCLUDE A VALID PUBLISHER');
    }

    if (!authorIds) {
      console.log('ERROR MUSH INCLUDE AUTHOR');
      throw new Error('MUST INCLUDE AN AUTHOR');
    }
    const authors = await this.authorsRepository.findByIds(authorIds);
    if (authors.length !== authorIds.length) {
      throw new Error('ONE OR MORE AUTHORS DO NOT EXIST');
    }

    let [daynow, monthNow, yearNow] = new Date()
      .toLocaleDateString()
      .split('/');

    yearNow = yearNow.slice(-2);

    const [day, month, year] = bookData.release_date.split('/');

    let fullYear = +year;
    if (year.length === 2) {
      fullYear += fullYear <= +yearNow ? 2000 : 1900;
    }

    const dateObj = new Date(+fullYear, +month - 1, +day);

    console.log('FORMATED DATE >>', dateObj.toISOString());

    bookData.release_date = dateObj.toISOString().split('T')[0];

    const book = this.booksRepository.create({ ...bookData, authors });
    return this.booksRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    const bookData = await this.booksRepository.find({
      relations: ['authors', 'publisher'],
    });
    return bookData;
  }

  async findOne(bookID: number): Promise<any> {
    const bookData = await this.booksRepository.findOne({
      where: { id: bookID },
      relations: ['authors', 'publisher'],
    });

    if (!bookData) {
      throw new Error('Book not found');
    }

    return bookData;
  }

  async update(id: number, updateBookDto: CreateBookDto): Promise<Book> {
    const { authorIds, ...bookData } = updateBookDto;
    console.log('updateBookDto >>> ', updateBookDto);
    console.log('bookData >>> ', bookData);
    console.log('authorIds >>> ', authorIds);

    if (!bookData.id_publisher) {
      console.log('ERROR MUST INCLUDE A PUBLISHER');
      throw new Error('ERROR MUST INCLUDE A PUBLISHER');
    }

    const publishers = await this.publisherRepository.findOneBy({
      id: bookData.id_publisher,
    });

    if (!publishers) {
      throw new Error('MUST INCLUDE A VALID PUBLISHER');
    }

    if (!authorIds || authorIds.length === 0) {
      console.log('ERROR MUSH INCLUDE AUTHOR');
      throw new Error('MUST INCLUDE AN AUTHOR');
    }
    const authors = await this.authorsRepository.findByIds(authorIds);
    if (authors.length !== authorIds.length) {
      throw new Error('ONE OR MORE AUTHORS DO NOT EXIST');
    }

    const bookToUpdate = await this.booksRepository.findOne({
      where: { id },
      relations: ['authors'],
    });

    if (!bookToUpdate) {
      throw new Error('Book not found');
    }

    Object.assign(bookToUpdate, bookData);

    bookToUpdate.authors = authors;
    bookToUpdate.publisher = publishers;

    await this.booksRepository.save(bookToUpdate);

    let response = await this.findOne(id);

    console.log('RESPONSE >> ', response);
    return response;
  }

  async remove(id: number): Promise<boolean> {
    try {
      const result = await this.booksRepository.delete(id);
      return result.affected > 0;
    } catch (error) {
      console.error('ERROR DELETING THE BOOK:', error);
      throw new Error('ERROR DELETING THE BOOK');
    }
  }
}
