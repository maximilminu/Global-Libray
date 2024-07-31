import { Book } from 'src/books/entities/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Unique } from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  legal_id: string;

  @Column()
  nationality: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];
}