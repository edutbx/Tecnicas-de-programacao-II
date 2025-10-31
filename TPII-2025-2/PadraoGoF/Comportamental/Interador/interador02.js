// 1. Interface do Iterador:
class Interador{
    temProximo(){};
    proximo(){};
}

// 2. Interador Concreto:

// 2.1 Interador para Array:
class InteradorDeNomesArray extends Interador{
    constructor(nomesArray){
        super();
        this.nomes = nomesArray;
        this.indice = 0;
    }

    temProximo(){
        return this.indice < this.nomes.length;
    }

    proximo(){
        if(!this.temProximo()) return null;
        return this.nomes[this.indice++];
    }
}

// 2.2 Interador para Lista Ligada
class InteradorDeNomesLista extends Interador{
    constructor(noCabeca){
        super();
        this.atual = noCabeca // Ponteiro para o nó atual
    }

    temProximo(){
        return this.atual !== null;
    }

    proximo(){
        if(!this.temProximo()) return null;
        const valor = this.atual.valor;
        this.atual = this.atual.prox; // Avança na lista
        return valor;
    }
}

// 3. Estrutura com Representações Diferentes:

// 3.1 Coleção baseada em array
class ColecaoArrayNomes{
    constructor(){
        this._nomes = [];

    }
    adicionar(nome){
        this._nomes.push(nome);
    }

    criarInterador(){
        return new InteradorDeNomesArray(this._nomes);
    }
}

// 3.2 Coleção baseada em lista
class No{
    constructor(valor){
        this.valor = valor;
        this.prox = null;
    }
} 

class ColecaoListaDeNomes{
    constructor(){
        this._cabeca = null; //Incio da lista
        this._cauda = null //Fim da  (para inserir 0(1))
    }

    adicionar(nome){
        const novo = new No(nome);
        if(!this._cabeca){
            this._cabeca = novo;
            this._cauda = novo;
        }else{
            this._cauda.prox = novo;
            this._cauda = novo;
        }
    }

    criarInterador(){
        return new InteradorDeNomesLista(this._cabeca);
    }
}

// 4. Cliente generico - em tese não sabe qual é a estrutura:
function imprimir(Interador, titulo = "Exemplo do Interando"){
    console.log(`\n********* ${titulo} *********`);
    while(Interador.temProximo()){
        console.log(Interador.proximo());
    }
}

// 5. Uso padrão - demonstração:

// 5.1 Coleção de array:
const turmaArray = new ColecaoArrayNomes();
["Edu", "Tbx", "Genio", "Craque", "De", "Bola"].forEach(n => turmaArray.adicionar(n));

// 5.2 Coleção de lista:
const turmaLista = new ColecaoListaDeNomes();
["Alice", "Beatriz", "Caio", "Daniel", "Elisa", "Fabio"]
  .forEach(n => turmaLista.adicionar(n));

// 5.3 Usa o mesmo padrão Interador para percorrer Ambas:
imprimir(turmaArray.criarInterador(), "Turma - Array");
imprimir(turmaLista.criarInterador(), "Turma - Lista");