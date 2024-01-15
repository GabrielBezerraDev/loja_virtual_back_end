import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return this.prismaService.product.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
