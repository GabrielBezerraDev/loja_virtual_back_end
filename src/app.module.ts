import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesModule } from './services/services.module';
import { CategorysModule } from './categorys/categorys.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductsModule, PrismaModule, ServicesModule, CategorysModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
