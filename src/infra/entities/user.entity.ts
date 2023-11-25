import { UserEntityInterface } from "src/domain/entities/userEntity.interface";
import { Column, Entity, PrimaryColumn } from "typeorm";

// classe dependente do typeorm
@Entity()
export class User implements UserEntityInterface {

  @PrimaryColumn({ type: 'integer'})
  id: number;

  @Column('varchar', { length: 255, nullable: false })
  login: string;

  @Column('varchar', { length: 255, nullable: false })
  email: string;
}