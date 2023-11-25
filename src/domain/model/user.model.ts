import { UserEntityInterface } from "../entities/userEntity.interface";

export class User implements UserEntityInterface {
  id: number;
  login: string;
  email: string;
}