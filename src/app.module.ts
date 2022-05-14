import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ashar1:ashar1@cluster0.ybb8j.mongodb.net/Crud_GraphQL?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
