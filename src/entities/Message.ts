import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
  @PrimaryColumn()
  id: string;

  //Coluna chave estrangeira para admin_id
  @Column()
  admin_id: string;

  @Column()
  text: string;

  //Relacionamento Message many to one User
  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  //Coluna chave estrangeira para user_id
  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Message };
