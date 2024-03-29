import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateCodeProductService } from 'src/services/generate-code-product/generate-code-product.service';
import { JwtAuth } from 'src/auth/jwtAuth.guard';

@Injectable()
export class ProductsService {
  constructor(
    private prismaService: PrismaService, 
    private generateCodeProduct: GenerateCodeProductService
    ) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: createProductDto
    });
  }

  async findAll() {
    console.log(await this.prismaService.product.findMany());
    return await this.prismaService.product.findMany();
  }

  findByCategory(id:number){
    return this.prismaService.product.findMany(
      {
        where: {
          categoryId: id
        }
      }
    )
  }

  findOne(id: number) {
    return this.prismaService.product.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id: id
      },
      data: updateProductDto
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where:{
        id:id
      }
    });
  }

  getCodeProduct():string{
    return this.generateCodeProduct.getCodeProduct();
  }
}
