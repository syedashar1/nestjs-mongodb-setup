/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly UserModel: Model<UserDocument>
  ){}

  //  creating a user 
  //  ts function means it takes a user which type is User object and returns a promise that it will return a user object
  async createUser(user: User): Promise<User>{
     const newUser = new this.UserModel(user)
     return newUser.save()
  }

  //  reading the user collection 
  async readUser(){
    return this.UserModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateUser(id,data):Promise<User>{
    return this.UserModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data 
  async deleteUser(id){
    return this.UserModel.findByIdAndRemove(id)
  }
}