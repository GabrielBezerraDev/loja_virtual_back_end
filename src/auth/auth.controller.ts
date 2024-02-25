import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserWithPasswordDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post()
  async findOne(@Body() user:CreateUserWithPasswordDto) {
   let token: string = await this.authService.login(user);
   if(token){
     return JSON.stringify(token);
   }else{
     throw new HttpException({error: "Senha ou Email não encontrado!"}, HttpStatus.UNAUTHORIZED);
   }
  }


}
