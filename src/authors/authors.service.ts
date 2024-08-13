import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { doesNotMatch } from 'assert';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    const legalIdPattern = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    if (!legalIdPattern.test(createAuthorDto.legal_id)) {
      console.log('ERROR NOT A VALID LEGAL ID');
      throw new Error('NOT A VALID LEGAL ID');
    }

    createAuthorDto.legal_id = createAuthorDto.legal_id.split('.').join('');

    const author = this.authorsRepository.create(createAuthorDto);
    return this.authorsRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    let authors = [];
    try {
      authors = await this.authorsRepository.find();
    } catch (error) {
      console.log('ERROR: ', error);
    }

    return authors;
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorsRepository.findOneBy({ id });
  }

  async update(authorID: number, updateAuthorDto: CreateAuthorDto): Promise<Author> {
    if (authorID === null) {
      throw new HttpException(
        {
          error: 'MUST INCLUDE AN AUTHOR ID',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const author = await this.authorsRepository.findOneBy({ id:authorID });

    if (!author) {
      throw new HttpException(
        {
          error: 'AUTHOR NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    Object.assign(author, updateAuthorDto);

    await this.authorsRepository.save(author);
    let response = await this.findOne(authorID);
    return response;
  }

  async remove(id: number): Promise<boolean> {
    try {
      const result = await this.authorsRepository.delete(id);
      return result.affected > 0;
    } catch (error) {
      console.error('ERROR DELETING THE AUTHOR:', error);
      throw new Error('DELETING THE AUTHOR');
    }
  }

  async findAuthorsByNationality(nationality: string): Promise<Author[]> {
    return await this.authorsRepository
      .createQueryBuilder('author')
      .where('author.nationality = :nationality', { nationality })
      .getMany();
  }

  // Example: Find authors with a specific pattern in their surname
  async findAuthorsBySurnamePattern(pattern: string): Promise<Author[]> {
    return await this.authorsRepository
      .createQueryBuilder('author')
      .where('author.surname LIKE :pattern', { pattern: `%${pattern}%` })
      .getMany();
  }
}
