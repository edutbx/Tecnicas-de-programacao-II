// 1.1 - Implementação da pizza
class Sabor{
    constructor(sabor){
        this.sabor = sabor;
    }
    
    getSabor(){
        return this.sabor;
    }
}

class Borda{
    constructor(borda){
        this.borda = borda;
    }
}

class 


// 1.2 - Implementação concreta da pizza:
class Mussarela extends Pizza{
    constructor(){
        super("Mussarela")
    }
}

class bordaCatupiry extends Borda{
    constructor(){
        super("borda de catyputy")
    }
}

class BordaCatupiry extends Pizza{
    constructor(){
        super("Borda de catupiry");
    }
}

class BordaChocolate extends Pizza{
    constructor(){
        super("Borda de chocolate");
    }
}

class Grade extends Pizza{
    constructor(){
        super("Grande");
    }
}

class Broto extends Pizza{
    constructor(){
        super("Broto");
    }
}

class OpcionalQueijo extends Pizza{
    constructor(){
        super("Queijo");
    }
}

class opcionalBacon extends Pizza{
    constructor(){
        super("Bacon");
    }
}

class opcionalGranulado extends Pizza{
    constructor(){
        super("Granulado");
    }
}

// 2.1 - Implementação da interface forma pizza
class FormaPizza{
    constructor(sabor, borda, tamanho, opcional){
        this.sabor = sabor;
        this.borda = borda;
        this.tamanho = tamanho;
        this.opcional = opcional;
    }

    montarPizza(){
        throw new Error("Esse método precisa ser implementado pela subclasse");
    }
}

// 2.2 - Abstração refinada
class PizzaPronta extends Pizza{
    montarPizza(){
        console.log(`Pizza de ${this.sabor.getSabor()}, borda de ${this.borda.getBorda()}, tamanho: ${this.tamanho.getTamanho()}, opcional de ${this.opcional.getOpcional()}`)
    }
}

// 3 - Utilização - Cliente
const mussarela = new Mussarela();
const toscana = new Toscana();

const bordaCatupiry = new BordaCatupiry();
const bordaChocolate = new BordaChocolate();

const grande = new Grade();
const broto = new Broto();

const queijo = new OpcionalQueijo();
const bacon = new opcionalBacon();
const granulado = new opcionalGranulado();

const pizza1 = new Pizza(mussarela, bordaCatupiry, grande, bacon);

const pizza2 = new Pizza(toscana, bordaChocolate, broto, granulado);

pizza1.montarPizza();
pizza2.montarPizza();