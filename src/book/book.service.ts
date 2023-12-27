import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    )  {}

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
    return books;
    }

    async create(book: CreateBookDto): Promise<Book>{
        const res = await this.bookModel.create(book)
        return res
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id);
    
        if (!book) {
            throw new NotFoundException('Book not found');
        }
    
        return book;
    }

    async updateId(id: string,book: UpdateBookDto): Promise<Book> {
       return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    
    }

    // 
    
    async deleteById(id: string): Promise<any> {
        const deletedBook = await this.bookModel.findByIdAndDelete(id);

        // if (!deletedBook) {
        //     throw new NotFoundException('Book not found for deletion');
        // }

        return deletedBook;
     
    // async deleteById(id: string): Promise<any>
    //     const deletedBook = await this.bookModel.findByIdAndDelete(id, Book)
    
    //     if (!deletedBook) {
    //         throw new NotFoundException('Book not found for deletion');
    //     }
    //     return deletedBook;

    }

}