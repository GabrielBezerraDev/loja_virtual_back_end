import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt'; 
import { CreateUserWithPasswordDto } from 'src/user/dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(
    private jwt: JwtService,
    private prismaService: PrismaService
    ){}

  async login(user:CreateUserWithPasswordDto) {
    let dbUser: CreateUserWithPasswordDto = null; 
    await this.prismaService.user.findUnique({
      where: {
        email: user.email
      }
    }).then(value => dbUser = value );
    console.log(dbUser);

    let payload = {
      sub: user.email
    }

    console.log(this.jwt.sign(payload));
  }

}
