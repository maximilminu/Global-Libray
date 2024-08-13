import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublishersService {

  constructor(
    @InjectRepository(Publisher)
    private publishersRepository: Repository<Publisher>,
  ){}

  async create(createPublisherDto: CreatePublisherDto):Promise<Publisher> {
    const publisher = this.publishersRepository.create(createPublisherDto);

    const taxIDPatter = /^\d{2}-\d{8}-\d{1}$/;
    if (!taxIDPatter.test(createPublisherDto.tax_number)) {
      console.log('ERROR NOT A VALID TAX ID NUMBER');
      throw new Error('NOT A VALID TAX ID NUMBER');
    }

    return await this.publishersRepository.save(publisher);    
  }

  findAll(): Promise<Publisher[]>{
    return this.publishersRepository.find()
  }

  findOne(id: number): Promise<Publisher> {
    return this.publishersRepository.findOneBy({ id })
  }

  async update(publisherID: number, updatePublisherDto: CreatePublisherDto): Promise<Publisher> {

    const publisher = await this.publishersRepository.findOneBy({id: publisherID})

    if (!publisher) {
      throw new HttpException(
        {
          error: 'PUBLISHER NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    Object.assign(publisher, updatePublisherDto);

    await this.publishersRepository.save(publisher)
      return this.findOne(publisherID)
  }

  async remove(id: number): Promise<boolean>  {
    const result = await this.publishersRepository.delete(id);
    return result.affected > 0;
  }
}
