import { UserDOI } from "../dois/UserDOI";

interface DatabaseAdapterInterface {
  getAll: () => UserDOI[];
}

export { DatabaseAdapterInterface };
