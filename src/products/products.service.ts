import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateCodeProductService } from 'src/services/generate-code-product/generate-code-product.service';

@Injectable()
export class ProductsService {
  constructor(
    private prismaService: PrismaService, 
    private generateCodeProduct: GenerateCodeProductService
    ) {}

  create(createProductDto: CreateProductDto) {
    createProductDto.codeProduct = this.generateCodeProduct.getCodeProduct();
    console.log(createProductDto);
    return this.prismaService.product.create({
      data: createProductDto
    });
  }

  async findAll() {
    console.log(await this.prismaService.product.findMany());
    return await this.prismaService.product.findMany();
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
