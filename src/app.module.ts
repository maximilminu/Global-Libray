import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';
import { BooksModule } from './books/books.module';
import { Author } from './authors/entities/author.entity';
import { Publisher } from './publishers/entities/publisher.entity';
import { Book } from './books/entities/book.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '1234',
      database: 'GlobalLibrary',
      entities: [Author, Publisher, Book],
      synchronize: false
    }),
    AuthorsModule,
    PublishersModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
