import { User } from "src/domain/model/user.model";
import { UserRepositoryInterface } from "src/domain/repositories/userRepository.interface";
import { CreateUserDto } from "src/infra/api/v1/nest/controllers/user/user.dto";

export class CreateUser {

  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(createUserDto: CreateUserDto): Promise<string>{
    const user = new User();
    user.email = createUserDto.email;
    user.login = createUserDto.login;

    const result = await this.userRepository.save(user)
    return result
  }
}