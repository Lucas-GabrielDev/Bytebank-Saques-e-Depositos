export class sistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha); 
    }
}