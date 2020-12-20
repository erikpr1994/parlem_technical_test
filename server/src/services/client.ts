import { ClientModel, ClientStatic } from '../models/clientModel';

export default class ClientService {
  constructor(private ClientModel: ClientStatic) {
    ClientModel = this.ClientModel;
  }

  public async getClientById(clientInputDTO: number) {
    const result = await this.ClientModel.findByPk(clientInputDTO);
    const client = result?.get();
    return client;
  }

  public async getAllClients() {
    return await this.ClientModel.findAll<ClientModel>();
  }
}
