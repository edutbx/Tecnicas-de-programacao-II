//Estrutura Componente:
class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){}

    remover(){}

    obterNome(){}

}

//Estrutura folha:
class Folha extends Componente{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    oberPreco(){
        return this.preco;
    }
}

//Estrutura Container que irá compor (Componente):
class Container extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }

    adicionar(componente){
        this.componentes.push(componente);
    }

    remover(componente){
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    oberPreco(){
        let preco = 0;
        this.componentes.forEach(componente => {
            preco += componente.oberPreco();
        });
        return preco;
    }
}

//Exemplo de uso - Supermercado:
const maca = new Folha('Maçã', 2.00);
const laranja = new Folha('Laranja',3.00);
const uva = new Folha('Uva',5.00);

const frutas = new Container('Frutas');
frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);

const caixa = new Container('Compra Total');
caixa.adicionar(frutas);
caixa.adicionar(new Folha('Embalagem',2.00));

console.log(`Preço total: R$${caixa.oberPreco()}`);