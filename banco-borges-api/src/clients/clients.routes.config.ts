import { CommonRoutesConfig } from "../common/common.routes.config";
import clientsController from "./controllers/clients.controller";
import clientsMiddleware from './middlewares/clients.middleware';
import express from 'express';

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
            .get(clientsController.listClients)
            .post(
                clientsMiddleware.validateClientRepeated,
                clientsMiddleware.validateRequiredClientBodyFields,
                clientsController.createClient
                );

        this.app.route(`clients/:cpfCnpj`)
            .all(clientsMiddleware.validateClientExists)
            .get(clientsController.getClientById)
            .put(
                clientsMiddleware.validateRequiredClientBodyFields,
                clientsController.updateClient
                )
            .delete(clientsController.removeClient)
            
        return this.app;
    }
}