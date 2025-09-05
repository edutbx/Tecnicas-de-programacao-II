class Aluno{
    constructor(){
        if(!Aluno.instancia){
            this.nome = "";
            this.notas = {};
            Aluno.instancia = this;
        }
        return Aluno.instancia;
    }

    definirNome(nome){
        this.nome = nome;
    }

    addNota(disciplina, nota){
        this.notas[disciplina] = nota;
    }

    calcularMedia(){
        const total = Object.values(this.notas).reduce((acc, nota) => acc + nota, 0);
        return total / Object.keys(this.notas).length;
    }
}

//Uso do padrao
const aluno1 = new Aluno();
aluno1.definirNome("edutbx");
aluno1.addNota("Mat", 8);
aluno1.addNota("En", 10);
aluno1.addNota("Port", 7.5);
console.log(`Média do aluno ${aluno1.nome} é de: ${aluno1.calcularMedia()}`);
console.log(" ");

const aluno2 = new Aluno();
aluno2.definirNome("Pedrao");
aluno2.addNota("Mat", 6)
aluno2.addNota("En", 9.5);
aluno2.addNota("Port", 9.7);
console.log(`Média do aluno ${aluno2.nome} é de: ${aluno2.calcularMedia()}`);
console.log("FIM")