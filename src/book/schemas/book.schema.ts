// import { Schema } from "mongoose";


// export enum Category {
//     ADVENTURE = "Adventure",
//     CLASSICS = "Classics",
//     CRIME = "Crime",
//     FANTASSY = "Fantassy",
// }


// @Schema({
//    // timestamps: true,
// })

// export class Book {
//     //@Prop()
//     title: string;


//    // @Prop()
//     description: string;

//    // @Prop()
//     author: string;

//    // @Prop()
//     price: number;

//     //@Prop()
//     category: Category;
// }



// export const BookSchema = SchemaFactory.createForClass(Book)


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy', 
}

@Schema({ 
    timestamps: true
 })

export class Book extends Document {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
