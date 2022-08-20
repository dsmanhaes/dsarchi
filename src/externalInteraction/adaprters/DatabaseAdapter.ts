import { DatabaseAdapterInterface } from "../adapterInterfaces/DatabaseAdapterInterface";
import { UserDOI } from "../dois/UserDOI";

class DatabaseAdapter implements DatabaseAdapterInterface {
  private _database: UserDOI[];

  constructor (dataBase: UserDOI[]) {
    this._database = dataBase;
  }

  public getAll (): UserDOI[] {
    return this._database;
  }
}

export { DatabaseAdapter };
