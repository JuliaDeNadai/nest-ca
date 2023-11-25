import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {

  @Post()
  login(): string {
    return "Login"
  }
}
