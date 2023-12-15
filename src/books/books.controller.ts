import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  //   @Get('/:name')
  //   hello(@Param('name') name: string) {
  //     return `Hello ${name}`;
  //   }
  //   @Post()
  //   createBook(@Body() payload: any) {
  //     console.log(payload);
  //   }
  //   @Post()
  //   createBook(@Body('name') name: string) {
  //     return name;
  //   }

  // =============================================
  //   private bookService: BooksService;

  //   constructor(booksService: BooksService) {
  //     this.bookService = booksService;
  //   }
  // =============================================
  //   Di singkat
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks(
    @Query('title') title: string,
    @Query('author') author: string,
    @Query('category') category: string,
  ) {
    return this.booksService.getBooks(title, author, category);
  }

  @Get('/:id')
  getBook(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(@Body() payload: CreateBookDto) {
    console.log(payload);
    return this.booksService.createBook(payload);
  }
  // createBook(
  //   @Body('title') title: string,
  //   @Body('author') author: string,
  //   @Body('category') category: string,
  // ) {
  //   return this.booksService.createBook(title, author, category);
  // }

  @Put('/:id')
  updateBook(@Param('id') id: string, @Body() payload: UpdateBookDto) {
    return this.booksService.updateBook(id, payload);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
