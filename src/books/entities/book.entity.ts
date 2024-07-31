import { IsNotEmpty } from 'class-validator';
import { Author } from 'src/authors/entities/author.entity';
import { Publisher } from 'src/publishers/entities/publisher.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  id_publisher: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  category: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNotEmpty()
  price: number;

  @Column()
  @IsNotEmpty()
  release_date: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  @JoinColumn({ name: 'id_publisher' }) 
  publisher: Publisher;

  @ManyToMany(() => Author)
  @JoinTable({
    name: 'books_authors',
    joinColumn: { name: 'id_book', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_author', referencedColumnName: 'id' },
  })
  authors: Author[];
}
