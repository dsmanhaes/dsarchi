import { UserRepository } from '../../domain/repositories/UserRepository';
import { DatabaseAdapter } from "../adaprters/DatabaseAdapter";
import { users } from "../../outside/database"; // TODO: ERROR - You can't access external layers

const dataBaseAdapter = new DatabaseAdapter(users);
const userRepository = new UserRepository(dataBaseAdapter);

const usersResponse = {
  message: 'List of all users!',
  users: userRepository.getAll(),
  links: [{
    "href": "/users",
    "rel": "users",
    "type" : "GET",
    "optionalAttributes": [ "name" ]
  }, {
    "href": "/users",
    "rel": "users",
    "type" : "POST",
    "attributes": [
      "name",
      "email"
    ]
  }]
};

export { usersResponse };
