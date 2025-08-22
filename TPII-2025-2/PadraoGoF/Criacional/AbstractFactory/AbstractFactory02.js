//Interface da Fábrica abstrata
class LojaAbstrata{
    criaProdutoEletronico(){}
    criaProdutoModa(){}
}

//Fábrica Concreta para criar produtos - loja física
class LojaFisica extends LojaAbstrata{
    criaProdutoEletronico(){
        return new Telefone();
    }

    criaProdutoModa(){
        return new Camiseta();
    }
}

//Fábrica concreta para criar produtos - loja virtual
class LojaVirtual extends LojaAbstrata{
    criaProdutoEletronico(){
        return new Telefone();
    }

    criaProdutoModa(){
        return new Camiseta();
    }
}

//Classe abstrata para produtos eletronicos
class ProdutoEletronico{
    constructor(){
        this.tipo = "eletronico";
    }

    descricao(){
        return `Produto ${this.tipo}: Telefone`
    }
}

//Classe abstrata para produtos moda
class ProdutoModa{
    constructor(){
        this.tipo = "moda";
    }

    descricao(){
        return `Produto ${this.tipo}: Camiseta`;
    }
}

//Classe concreta para produtos eletronicos:
class Telefone extends ProdutoEletronico{
    descricao(){
        return `Produto ${this.tipo}: Telefone`;
    }
}

//Classe concreta para produtos moda
class Camiseta extends ProdutoModa{
    descricao(){
        return `Produto ${this.tipo}: Camiseta`;
    }
}
//Interface de simulação da loja:
function loja(cliente, loja){
    const lojaFisica = loja.criaProdutoEletronico();
    const lojaVirtual = loja.criaProdutoModa();

    console.log(`${cliente} comprou.`);
    console.log(lojaFisica.descricao());
    console.log(lojaVirtual.descricao());
}

//Aplicação da venda simulada
const cliente1 = "edutbx";
const lojaFisica = new LojaFisica;
loja(cliente1,lojaFisica);

console.log("\n...\n");

const cliente2 = "Joãozin";
const lojaVirtual = new LojaVirtual;
loja(cliente2,lojaVirtual);