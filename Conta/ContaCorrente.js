import {Conta} from './Conta.js';

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    _sacar(valor){
            let taxa = 1.1;
            const valorSacado = taxa * valor;
            this._saldo -= valorSacado;
            return valorSacado;
    }
}
