export class CreateProductDto {
  name: string;
  price: number;
  codeProduct?: string;
  description: string;
  imgBase64: string;
  category: string;
}
