import { User } from "../entities/user/user";

export interface IUserRepository {
  save(user: User): Promise<void>;
<<<<<<< HEAD
}
=======
  findAllUsers(): Promise<User[]>
}


>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
