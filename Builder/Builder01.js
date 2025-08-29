//Definido parte de um carro
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    }
}

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Interior{
    constructor(cor){
        this.cor = cor;
    }
}

//Builder
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    addMotor(tipo){
        this.motor = new Motor(tipo);
        return this;
    }

    addCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    addRodas(tamanho){
        this.rodas =  new Rodas(tamanho);
        return this;
    }

    addInterior(cor){
        this.interior = new Interior(cor);
        return this;
    }

    construir(){
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}

//Construir carro
class Carro{
    constructor(motor, carroceria, rodas, interior){
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    mostrarDetalhes(){
        console.log(`Carro com motor: ${this.motor.tipo}\n carroceria: ${this.carroceria.estilo}\n rodas: ${this.rodas.tamanho}\n interior: ${this.interior.cor}\n`);
    }
}

//Uso do modelo builder - construindo um carro
const builder = new CarroBuilder();

const carroEsportivo = builder
    .addMotor('V8')
    .addCarroceria('Esportivo')
    .addRodas(18)
    .addInterior("Vermelho")
    .construir()

const carroSedan = builder
    .addMotor('1.4 LT')
    .addCarroceria('Sedan')
    .addRodas(15)
    .addInterior("Preto")
    .construir()
    
carroEsportivo.mostrarDetalhes();
carroSedan.mostrarDetalhes();
