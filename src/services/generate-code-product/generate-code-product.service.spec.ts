import { Test, TestingModule } from '@nestjs/testing';
import { GenerateCodeProductService } from './generate-code-product.service';

describe('GenerateCodeProductService', () => {
  let service: GenerateCodeProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateCodeProductService],
    }).compile();

    service = module.get<GenerateCodeProductService>(GenerateCodeProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
