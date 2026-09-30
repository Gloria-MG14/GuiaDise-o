import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(user: LoginDto) {
    // 1. Buscamos a Gloria en la base de datos por su correo
    const foundUser = await this.prisma.user.findFirst({
      where: { email: user.email },
    });

    // 2. Verificamos que exista y que la contraseña coincida exactamente
    if (!foundUser || user.password !== foundUser.password) {
      throw new UnauthorizedException('Credenciales inválidas en el sistema de Gloria');
    }

    // 3. Creamos el pase VIP (Token JWT)
    const payload = { email: foundUser.email, sub: foundUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}