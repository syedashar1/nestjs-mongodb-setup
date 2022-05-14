/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ default: Date.now })
  date_added: Date;
}


export const UserSchema = SchemaFactory.createForClass(User)