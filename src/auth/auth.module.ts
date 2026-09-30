import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module'; 
import { JwtStrategy } from './strategies/jwt.strategy'; // Importación añadida

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'gloria-bangtan-secret-key-2026',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [AuthService, JwtStrategy], // Estrategia registrada aquí
  controllers: [AuthController]
})
export class AuthModule {}