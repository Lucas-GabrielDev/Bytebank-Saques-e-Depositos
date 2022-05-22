//CLASSE ABSTRATA
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            throw new Error("Você não pode instanciar um objeto do tipo Conta, pois essa é uma Classe Abstrata");
        }
    }

    
    sacar(valor){
    //MÉTODO ABSTRATO
    throw new Error("O método SACAR não pode ser instanciado diretamente.")
    }

    depositar(valor){
        if(valor <= 0)
        {
            return valor;
        }
        this._saldo += valor; 
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}