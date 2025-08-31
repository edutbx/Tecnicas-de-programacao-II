//Definindo partes da pizza
class Tamanho{
    constructor(tipoTamanho){
        this.tipoTamanho = tipoTamanho;
    }
}

class Massa{
    constructor(tipoMassa){
        this.tipoMassa = tipoMassa;
    }
}

class Molho{
    constructor(tipoMolho){
        this.tipoMolho = tipoMolho;
    }
}

class Cobertura{
    constructor(tipoCobertura){
        this.tipoCobertura = tipoCobertura;
    }
}

//Builder
class PizzaBuilder{ 
    constructor(){
    this.reset();
    }

    reset(){
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.cobertura = [];
    }

    addTamanho(tipoTamanho){
        this.tamanho = new Tamanho(tipoTamanho);
        return this;
    }

    addMassa(tipoMassa){
        this.massa = new Massa(tipoMassa);
        return this;
    }

    addMolho(tipoMolho){
        this.molho = new Molho(tipoMolho);
        return this;
    }

    addCobertura(tipoCobertura){
        this.cobertura.push(tipoCobertura);
        return this;
    }

    construir(){
        return new Pizza(this.tamanho, this.massa, this.molho, this.cobertura);
    }
}

//Construir pizza
class Pizza{
    constructor(tamanho, massa, molho, cobertura){
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.cobertura = cobertura;
    }

    mostrarDetalhes(){
        console.log(`Pizza com tamanho ${this.tamanho.tipoTamanho}\n
             massa: ${this.massa.tipoMassa}\n 
             molho: ${this.molho.tipoMolho}\n 
             cobertura: ${this.cobertura.tipoCobertura}\n`
            )
    }
}

//Uso do modelo builder - construindo uma pizza
const builder = new PizzaBuilder();

const pizzaDePortuguesa = builder
    .addTamanho('Grande')
    .addMassa('Fina')
    .addMolho('Vermelho')
    .addCobertura('Queijo')
    .addCobertura('Tomate')
    .addCobertura('Orégano')
    .construir()

const pizzaDeChocolate = builder
    .addTamanho('Broto')
    .addMassa('Fina')
    .addMolho('Chocolate')
    .addCobertura('M&Ms')
    .addCobertura('Chocolate')
    .construir()

pizzaDePortuguesa.mostrarDetalhes();
pizzaDeChocolate.mostrarDetalhes();