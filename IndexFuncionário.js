import { Diretor } from "./Funcionário/Diretor.js";
import { Gerente } from "./Funcionário/Gerente.js";
import {sistemaAutenticacao} from "./sistemaAutenticação.js";

const Diretor1 = new Diretor("Genivaldo", 10000, 11122244410);
Diretor1.cadastrarSenha("cms1234")

const Gerente1 = new Gerente("Kallyl", 5000, 11122233311);
Gerente1.cadastrarSenha("Cms@1234")

const Logado = sistemaAutenticacao.login(Diretor1, "cms1234")
console.log(Logado);