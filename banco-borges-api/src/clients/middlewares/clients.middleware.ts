import express from 'express';
import clientsServices from '../services/clients.services';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-middleware');

class ClientsMiddleware {
    async validateRequiredClientBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && (req.body.cpf || req.body.cpfCnpj)) {
            next();
        } else {
            res.status(400).send({Error: `Você deve enviar o campo cpf ou cnpj`})
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await clientsServices.readById(Number(req.params.cpfCnpj));
        if(user) {
            next();
        } else {
            res.status(400).send({error: `Usuario ${req.params.cpfCnpj} não existe.`})
        }
    }

    async validateClientRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceId: number = ('cpf' in req.body ? req.body.cpf : req.body);
        const user = await clientsServices.readById(resourceId);
        if(!user) {
            next();
        } else {
            res.status(400).send({error: `Usuario ${resourceId} já existe.`})
        }
    }
}

export default new ClientsMiddleware();
