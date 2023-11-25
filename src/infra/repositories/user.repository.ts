import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntityInterface } from "src/domain/entities/userEntity.interface";
import { UserRepositoryInterface } from "src/domain/repositories/userRepository.interface";
import { User } from "src/infra/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements UserRepositoryInterface {

  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async save(user: UserEntityInterface): Promise<string> {
    const userEntity = `${user.login}`//await this.userEntityRepository.save(user);
    return userEntity;
  }
}