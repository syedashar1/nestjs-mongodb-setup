import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user')
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get('/user')
  readUser() {
    return this.appService.readUser();
  }

  @Put('/user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: User,
  ): Promise<User> {
    return this.appService.updateUser(id, userDto);
  }

  @Delete('/user/:id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
