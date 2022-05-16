import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 88822233309);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);

contaCorrenteRicardo.depositar(100);
contaCorrenteAlice.depositar(100);
contaCorrenteRicardo.transferir(15, contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log("-----------------------");
console.log("  Número de Contas: " + ContaCorrente.numeroDeContas)
console.log("-----------------------");
