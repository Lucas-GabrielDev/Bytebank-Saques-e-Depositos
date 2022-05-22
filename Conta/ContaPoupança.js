import {Conta} from "./Conta.js";

export class ContaPoupança extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    _sacar(valor){
        let taxa = 1.3;
        const valorSacado = taxa * valor;
        this._saldo -= valorSacado;
        return valorSacado;
}
}