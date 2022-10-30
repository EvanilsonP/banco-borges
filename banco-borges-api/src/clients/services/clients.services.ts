import clientsDao from "../daos/clients.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { ClientDTO } from "../dtos/client.dto";

class ClientsService implements CRUD {
    async create(resource: ClientDTO): Promise<ClientDTO> {
        return clientsDao.cadastrar(resource);
    }

    async deleteById(resourceId: number): Promise<void> {
        return clientsDao.excluir(resourceId);
    }

    async list(): Promise<ClientDTO[]> {
        return clientsDao.listar();
    }

    async readById(resourceId: number): Promise<ClientDTO | undefined> {
        return clientsDao.buscar(resourceId);
    }

    async updateById(resource: ClientDTO): Promise<ClientDTO | undefined> {
        return clientsDao.atualizar(resource);
    }
}

export default new ClientsService();