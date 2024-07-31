import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Put,
  HttpException,
} from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';

@Controller('/api/publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Post()
  async create(@Body() createPublisherDto: CreatePublisherDto) {
    try {
      return await this.publishersService.create(createPublisherDto);
    } catch (error) {
      throw new HttpException(
        {
          error: error.message || error || `error creating publisher`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Get('/report')
  @HttpCode(HttpStatus.OK)
  async generateReport() {
    const members = await this.publishersService.findAll();
    const report = {
      count: members.length,
      members: members,
    };
    return report;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishersService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePublisherDto: CreatePublisherDto,
  ) {
    return await this.publishersService.update(+id, updatePublisherDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.publishersService.remove(id);
    if (!result) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  }
}
