class Pessoa{
    constructor(funcao){
        this.funcao = funcao;
    }
    mostrarPessoa(){
        console.log(`Função: ${this.funcao}$`);
    }
}

class Aluno extends Pessoa{
    constructor(funcao){
        super(funcao);
    }
}

class Administrativo extends Pessoa{
    constructor(funcao){
        super(funcao);
    }
}

class Professor extends Pessoa{
    constructor(funcao){
        super(funcao);
    }
}

class Visitante extends Pessoa{
    constructor(funcao){
        super(funcao);
    }
}

class adicionaPessoa{
    identificaPessoa(funcao){
        throw new Error('ERROR!');
    }
}

class adicionaAluno extends adicionaPessoa{
    identificaPessoa(funcao){
        return new Aluno(funcao);
    }
}

class adicionaAdministrativo extends adicionaPessoa{
    identificaPessoa(funcao){
        return new Administrativo(funcao);
    }
}

class adiconaProfessor extends adicionaPessoa{
    identificaPessoa(funcao){
        return new Professor(funcao);
    }
}

class adicionaVisitante extends adicionaPessoa{
    identificaPessoa(funcao){
        return new Visitante(funcao);
    }
}

const AdicionaAluno = new adicionaAluno();
const AdicionaAdministrativo = new adicionaAdministrativo();
const AdiconaProfessor = new adiconaProfessor();
const AdicionaVisitante = new adicionaVisitante();

const aluno1 = AdicionaAluno.adicionaAluno("Eduardo");
const adm1 = adicionaAdministrativo.adicionaAdministrativo("Roger");
