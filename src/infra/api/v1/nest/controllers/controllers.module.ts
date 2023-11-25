import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';


@Module({
  controllers: [UserController],
})
export class ControllersModule {}