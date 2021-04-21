import { Message } from "../entities/Message";
import { Entity, EntityRepository, Repository } from "typeorm";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository };
