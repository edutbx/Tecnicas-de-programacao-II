//Classe pessoa - padrão que será clonado
class Pessoa {
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    //Método clone - realiza uma cópia superficial do objeto
    clone(){
        return new Pessoa(this.id, this.nome, this.idade)
    }
}

//Classe PessoaManager - gerencia instancias de pessoa
class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    //Método addPessoa - adiciona pessos ao dicionário Pessoas
    addPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    //Método getPessoaId - Solicita uma pessoa pelo id e retorna uma cópia dela
    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }
}

//Criando uma instância de PessoaManeger
const manager = new PessoaManager();

//Add três pessoas
manager.addPessoa(1, 'edutbx', 19);
manager.addPessoa(2, 'pedrao', 24);

//Clonando 1 Pessoa e modificando
const pessoaClone1 = manager.getPessoaById(1);
if(pessoaClone1){
    pessoaClone1.nome = "edutbx menó ódio rlk do marcinho vp clone"
}

//Clonando pessoa 2 e modificando 
const pessoaClone2 = manager.getPessoaById(2);
if(pessoaClone2){
    pessoaClone2.idade = "7528";
}

//Imprimindo as pessoas
console.log("Pessoa orginal - 1");
console.log(manager.getPessoaById(1));
console.log("Pessoa clonada 1")
console.log(pessoaClone1);
console.log(" ");
console.log("Pessoa orginal - 2");
console.log(manager.getPessoaById(2));
console.log("Pessoa clonada 2")
console.log(pessoaClone2);