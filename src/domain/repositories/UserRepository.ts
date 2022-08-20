import { DatabaseAdapterInterface } from "../../externalInteraction/adapterInterfaces/DatabaseAdapterInterface";
import { UserDOI } from "../../externalInteraction/dois/UserDOI";

class UserRepository {
  private _adapter: DatabaseAdapterInterface;
  
  constructor (adapter: DatabaseAdapterInterface) {
    this._adapter = adapter;
  }

  public getAll (): UserDOI[] {
    return this._adapter.getAll();
  }
}

export { UserRepository };
