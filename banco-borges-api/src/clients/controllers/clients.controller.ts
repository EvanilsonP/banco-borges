import express from 'express';
import clientsServices from '../services/clients.services';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response) {
        const clients = await clientsServices.list();
        res.status(200).send(clients);
    }

    async getClientById(req: express.Request, res: express.Response) {
        const client = await clientsServices.readById(Number(req.params.clientId));
        res.status(200).send(client);
    }

    async createClient(req: express.Request, res: express.Response) {
        const client = await clientsServices.create(req.body);
        res.status(201).send(client);
    }

    async updateClient(req: express.Request, res: express.Response) {
        const client = await clientsServices.updateById(req.body);
        res.status(200).send(client);
    }

    async removeClient(req: express.Request, res: express.Response) {
        const client = await clientsServices.deleteById(Number(req.params.clientId));
        res.status(204).send();
    }
}

export default new ClientsController();