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
const clients_dao_1 = __importDefault(require("../daos/clients.dao"));
class ClientsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.cadastrar(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.excluir(resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.listar();
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.buscar(resourceId);
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.atualizar(resource);
        });
    }
}
exports.default = new ClientsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnRzL3NlcnZpY2VzL2NsaWVudHMuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNkM7QUFJN0MsTUFBTSxjQUFjO0lBQ1YsTUFBTSxDQUFDLFFBQW1COztZQUM1QixPQUFPLHFCQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsT0FBTyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE9BQU8scUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLE9BQU8scUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQW1COztZQUNoQyxPQUFPLHFCQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9