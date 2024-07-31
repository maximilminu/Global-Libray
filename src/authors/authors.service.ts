import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity'
import { CreateAuthorDto } from './dto/create-author.dto';
import { doesNotMatch } from 'assert';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    const legalIdPattern=/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
    if (!legalIdPattern.test(createAuthorDto.legal_id)) {
      console.log('ERROR NOT A VALID LEGAL ID');
      throw new Error('NOT A VALID LEGAL ID');
    }

    createAuthorDto.legal_id  = createAuthorDto.legal_id.split('.').join('');
  
    const author = this.authorsRepository.create(createAuthorDto);
    return this.authorsRepository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: CreateAuthorDto): Promise<Author> {
    await this.authorsRepository.update(id, updateAuthorDto);
    return this.findOne(id);
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
    return await this.authorsRepository.createQueryBuilder('author')
      .where('author.nationality = :nationality', { nationality })
      .getMany();
  }

  // Example: Find authors with a specific pattern in their surname
  async findAuthorsBySurnamePattern(pattern: string): Promise<Author[]> {
    return await this.authorsRepository.createQueryBuilder('author')
      .where('author.surname LIKE :pattern', { pattern: `%${pattern}%` })
      .getMany();
  }
}
