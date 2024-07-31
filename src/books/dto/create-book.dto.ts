import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Author } from 'src/authors/entities/author.entity';
import { JoinTable, ManyToMany } from 'typeorm';

export class CreateBookDto {
  
  @IsNumber()
  @IsNotEmpty()
  id_publisher: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsDateString()
  @IsNotEmpty()
  release_date: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  authorIds: number[];
}