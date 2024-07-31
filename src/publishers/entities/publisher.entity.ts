import { IsNotEmpty } from 'class-validator';
import { Book } from 'src/books/entities/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('publishers')
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  address: string;

  @Column()
  @IsNotEmpty()
  tax_number: string;

  @OneToMany(() => Book, book => book.publisher)
  @IsNotEmpty()
  books: Book[];
}