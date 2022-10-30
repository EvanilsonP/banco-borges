"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_services_1 = __importDefault(require("../services/clients.services"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-middleware');
class ClientsMiddleware {
    validateRequiredClientBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && (req.body.cpf || req.body.cpfCnpj)) {
                next();
            }
            else {
                res.status(400).send({ Error: `Você deve enviar o campo cpf ou cnpj` });
            }
        });
    }
    validateClientExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield clients_services_1.default.readById(Number(req.params.cpfCnpj));
            if (user) {
                next();
            }
            else {
                res.status(400).send({ error: `Usuario ${req.params.cpfCnpj} não existe.` });
            }
        });
    }
    validateClientRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourceId = ('cpf' in req.body ? req.body.cpf : req.body);
            const user = yield clients_services_1.default.readById(resourceId);
            if (!user) {
                next();
            }
            else {
                res.status(400).send({ error: `Usuario ${resourceId} já existe.` });
            }
        });
    }
}
exports.default = new ClientsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvbWlkZGxld2FyZXMvY2xpZW50cy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0ZBQTJEO0FBQzNELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGlCQUFpQjtJQUNiLGdDQUFnQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDMUcsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxzQ0FBc0MsRUFBQyxDQUFDLENBQUE7YUFDeEU7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLE1BQU0sSUFBSSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFHLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGNBQWMsRUFBQyxDQUFDLENBQUE7YUFDN0U7UUFDTCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ2hHLElBQUksVUFBVSxHQUFXLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEdBQUcsTUFBTSwwQkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4RCxJQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxVQUFVLGFBQWEsRUFBQyxDQUFDLENBQUE7YUFDcEU7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksaUJBQWlCLEVBQUUsQ0FBQyJ9