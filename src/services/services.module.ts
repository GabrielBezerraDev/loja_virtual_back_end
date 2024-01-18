import { Global, Module } from '@nestjs/common';
import { GenerateCodeProductService } from './generate-code-product/generate-code-product.service';

@Global()
@Module({
  providers: 
  [
    GenerateCodeProductService
  ],
  exports: 
  [
    GenerateCodeProductService
  ]
})
export class ServicesModule {}
