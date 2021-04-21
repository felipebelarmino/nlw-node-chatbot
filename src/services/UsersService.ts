import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    //Verificar se user existe
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({ email });

    //Se existir retorna user
    if (userExists) {
      return userExists;
    }

    //Se não existe, salva no DB
    const user = usersRepository.create({ email });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };
