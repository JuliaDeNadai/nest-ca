import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { CreateUser } from "src/usecases/user/createUser.usecase";

@Controller()
export class UserController {

  /* constructor(private readonly createUserUseCase: CreateUser){} */

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    //const user = await this.createUserUseCase.execute(createUserDto)
    return 'user'
  }
}