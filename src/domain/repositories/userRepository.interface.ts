import { UserEntityInterface } from "src/domain/entities/userEntity.interface";

export interface UserRepositoryInterface {
  save(user: UserEntityInterface): Promise<string>;
}