import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Correo institucional del usuario',
    example: 'gloria.gonzalez93u@std.uni.edu.ni',
  })
  email: string;

  @ApiProperty({
    description: 'Contraseña de acceso',
    example: 'Bangtan_Army2026',
  })
  password: string;
}