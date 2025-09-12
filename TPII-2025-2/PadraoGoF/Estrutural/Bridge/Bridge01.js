// 1.1 - Implementação da interface de cor
class Cor{
    constructor(cor){
        this.cor = cor;
    }

    getCor(){
        return this.cor;
    }
}

// 1.2 - Implementação concreta de cores:
class CorVermelha extends Cor{
    constructor(){
        super("Vermelho");
    }
}

class CorAzul extends Cor{
    constructor(){
        super("Azul");
    }
}

class CorRoxo extends Cor{
    constructor(){
        super("Roxo");
    }
}

// 2.1 - Implementação da inteface de forma
class Forma{
    constructor(cor){
        this.cor = cor;
    }

    desenhar(){
        throw new Error("Esse método precisa ser implementado pela subclasse");
    }
}

// 2.2 - Abstração refinada
class Circulo extends Forma{
    desenhar(){
        console.log(`Desenhando um círculo ${this.cor.getCor()}`);
    }
}

class Quadrado extends Forma{
    desenhar(){
        console.log(`Desenhando um quadrado ${this.cor.getCor()}`);
    }
}

class Triangulo extends Forma{
    desenhar(){
         console.log(`Desenhando um triangulo ${this.cor.getCor()}`);
    }
}

// 3 - Utilização - Cliente
const vermelho = new CorVermelha();
const azul =  new CorAzul();
const roxo = new CorRoxo();


const circulo1 = new Circulo(vermelho);
const circulo2 = new Circulo(azul);
const circulo3 = new Circulo(vermelho);

const quadrado1 = new Quadrado(azul);
const quadrado2 = new Quadrado(roxo);

const triangulo1 = new Triangulo(azul);

circulo1.desenhar();
circulo2.desenhar();
circulo3.desenhar();

quadrado1.desenhar();
quadrado2.desenhar();

triangulo1.desenhar();