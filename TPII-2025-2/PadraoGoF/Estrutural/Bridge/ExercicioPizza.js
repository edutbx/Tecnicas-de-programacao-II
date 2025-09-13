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

    getBorda(){
        return this.borda;
    }
}

class Tamanho{
   constructor(tamanho){
    this.tamanho = tamanho;
   }

   getTamanho(){
    return this.tamanho;
   }
}

class Opcional{
    constructor(opcional){
        this.opcional = opcional;
    }

    getOpcional(){
        return this.opcional;
    }
}


// 1.2 - Implementação concreta da pizza:
class Mussarela extends Sabor{
    constructor(){
        super("Mussarela");
    }
}

class Portuguesa extends Sabor{
    constructor(){
        super("Portuguesa");
    }
}

class Brigadeiro extends Sabor{
    constructor(){
        super("Brigadeiro");
    }
}

class BordaCatupiry extends Borda{
    constructor(){
        super("Catupiry");
    }
}

class BordaChocolate extends Borda{
    constructor(){
        super("Chocolate");
    }
}


class Grade extends Tamanho{
    constructor(){
        super("Grande");
    }
}

class Broto extends Tamanho{
    constructor(){
        super("Broto");
    }
}

class OpcionalQueijo extends Opcional{
    constructor(){
        super("Queijo");
    }
}

class OpcionalBacon extends Opcional{
    constructor(){
        super("Bacon");
    }
}

class OpcionalGranulado extends Opcional{
    constructor(){
        super("Granulado");
    }
}

class OpcionalMorango extends Opcional{
    constructor(){
        super("Morango");
    }
}

// 2.1 - Implementação da interface forma pizza
class Pizza{
    constructor(sabor, borda, tamanho, opcional = []){
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
        const lista = this.opcional.map(o => o.getOpcional()).join(", ") || "nenhum";
        console.log(`Pizza de ${this.sabor.getSabor()}, borda de ${this.borda.getBorda()}, tamanho: ${this.tamanho.getTamanho()}, opcional de ${lista}`)
    }
}

// 3 - Utilização - Cliente
const mussarela = new Mussarela();
const portuguesa = new Portuguesa();
const brigadeiro = new Brigadeiro();

const bordaCatupiry = new BordaCatupiry();
const bordaChocolate = new BordaChocolate();

const grande = new Grade();
const broto = new Broto();

const queijo = new OpcionalQueijo();
const bacon = new OpcionalBacon();
const granulado = new OpcionalGranulado();
const morango = new OpcionalMorango();

const pizza1 = new PizzaPronta(mussarela, bordaCatupiry, grande, [queijo, bacon]);

const pizza2 = new PizzaPronta(portuguesa, bordaCatupiry, grande, [bacon]);

const pizza3 = new PizzaPronta(brigadeiro, bordaChocolate, broto, [granulado, morango]);

const pizza4 = new PizzaPronta(mussarela, bordaChocolate, grande, []);

console.log("------------------------------------------------------------------------------------");
pizza1.montarPizza();
console.log("------------------------------------------------------------------------------------");
pizza2.montarPizza();
console.log("------------------------------------------------------------------------------------");
pizza3.montarPizza();
console.log("------------------------------------------------------------------------------------");
pizza4.montarPizza();
console.log("------------------------------------------------------------------------------------");
