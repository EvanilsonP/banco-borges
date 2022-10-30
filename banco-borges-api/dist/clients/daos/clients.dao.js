"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class ClientesDAO {
    constructor() {
        this._clientes = [];
        log('Criando nova instância de ClienteDao');
    }
    cadastrar(pessoa) {
        let objPessoa;
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);
        return objPessoa;
    }
    atualizar(pessoa) {
        let objPessoa;
        objPessoa = pessoa;
        if (objPessoa.indexId === undefined)
            return;
        this._clientes[objPessoa.indexId] = objPessoa;
        return objPessoa;
    }
    listar() {
        let objPessoa = [];
        for (let cliente of this._clientes)
            objPessoa.push(cliente);
        return objPessoa;
    }
    excluir(cpfCnpj) {
        const indexId = this._clientes.findIndex((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        this._clientes.splice(indexId, 1);
    }
    buscar(cpfCnpj) {
        const cliente = this._clientes.find((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        if (!cliente)
            return;
        return cliente;
    }
}
exports.default = new ClientesDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50cy9kYW9zL2NsaWVudHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sV0FBVztJQUdiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFpQjtRQUN2QixJQUFJLFNBQVMsQ0FBQztRQUVkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWlCO1FBQ3ZCLElBQUksU0FBUyxDQUFDO1FBRWQsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUVuQixJQUFHLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUM5QixPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRTlDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxTQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxLQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBYyxFQUFFLEVBQUU7WUFDeEQsSUFBRyxLQUFLLElBQUksR0FBRztnQkFDWCxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDOztnQkFFM0IsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRTtZQUNuRCxJQUFHLEtBQUssSUFBSSxHQUFHO2dCQUNYLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUM7O2dCQUUzQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBRyxDQUFDLE9BQU87WUFDUCxPQUFPO1FBRVgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9