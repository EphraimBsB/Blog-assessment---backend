import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  login(
    @Body() { username, password }: { username: string; password: string },
  ) {
    return this.authService.login(username, password);
  }

  @Get()
  async getUsers() {
    return this.authService.getUsers();
  }
}
