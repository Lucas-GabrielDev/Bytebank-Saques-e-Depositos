import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 1001)
    }

    _sacar(valor){
        let taxa = 1;
        const valorSacado = taxa * valor;
        this._saldo -= valorSacado;
        return valorSacado;
}
}