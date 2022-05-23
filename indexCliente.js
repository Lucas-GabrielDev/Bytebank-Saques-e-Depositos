import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupança} from "./Conta/ContaPoupança.js";
import {ContaSalario} from "./Conta/ContaSalário.js";
import {sistemaAutenticacao} from "./sistemaAutenticação.js";

const cliente1 = new Cliente("Lucas", 11122233309);
cliente1.cadastrarSenha("lucas1234")
const lucasLogado = sistemaAutenticacao.login(cliente1, "lucas1234");

const contaCorrenteLucas = new ContaCorrente(0, cliente1, 1001);
const contaPoupançaLucas = new ContaPoupança(0, cliente1, 1001);
const ContaSalarioLucas = new ContaSalario(cliente1);

contaPoupançaLucas.depositar(100);
contaPoupançaLucas._sacar(10);  
contaCorrenteLucas.depositar(1000);
contaCorrenteLucas._sacar(100);
ContaSalarioLucas.depositar(250);
ContaSalarioLucas._sacar(25);
console.log(contaCorrenteLucas);
console.log(contaPoupançaLucas);
console.log(ContaSalarioLucas);

console.log(`Usuário está logado?: ${lucasLogado}`);