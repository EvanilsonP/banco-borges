import { ClientDTO } from "../dtos/client.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class ClientesDAO {
    private _clientes: ClientDTO[];

    constructor() {
        this._clientes = [];
        log('Criando nova instância de ClienteDao');
    }

    cadastrar(pessoa: ClientDTO): ClientDTO {
        let objPessoa;

        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);

        return objPessoa;
    }

    atualizar(pessoa: ClientDTO): ClientDTO | undefined {
        let objPessoa;

        objPessoa = pessoa;

        if(objPessoa.indexId === undefined)
            return;

        this._clientes[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (ClientDTO)[] {
        let objPessoa: (ClientDTO)[] = [];

        for(let cliente of this._clientes)
            objPessoa.push(cliente);

        return objPessoa;
    }

    excluir(cpfCnpj: Number): void {
        const indexId = this._clientes.findIndex((obj: ClientDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });

        this._clientes.splice(indexId, 1);
    }

    buscar(cpfCnpj: number): ClientDTO | undefined {
        const cliente = this._clientes.find((obj: ClientDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else 
                return obj.cnpj === cpfCnpj;
        });

        if(!cliente)
            return;
        
        return cliente;
    }
}

export default new ClientesDAO();