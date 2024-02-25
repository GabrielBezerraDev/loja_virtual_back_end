import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategyService } from './services/jwt-strategy.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
  imports: [JwtModule.register(
    {
      secret: "bananaFritaComFeijoada",
      signOptions: {
        expiresIn: "860s"
      }
    }
  )]
})
export class AuthModule {}
