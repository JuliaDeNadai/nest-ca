import { Module } from '@nestjs/common';
import { ControllersModule } from './infra/api/v1/nest/controllers/controllers.module';
import { CreateUser } from './usecases/user/createUser.usecase';
import { UserRepositoryInterface } from './domain/repositories/userRepository.interface';
import { UserRepository } from './infra/repositories/user.repository';

@Module({
  imports: [ControllersModule],
  controllers: [],
  providers: [
   /*  {
      provide: CreateUser,
      useFactory(userRepository: UserRepositoryInterface) { 
        const createUser = new CreateUser(userRepository)
        return createUser },
      inject: [ UserRepository ]
    }, */
  ],
})
export class AppModule {}
