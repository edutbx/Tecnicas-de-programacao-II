// 1 Interface Abstract Factory
class AbstractFactory{
    criaProdutoA(){}
    criaProdutoB(){}
}

//Fábrica 1 Concreta que cria produto do tipo A e B
class FabricaConcreta1 extends AbstractFactory{
    criaProdutoA(){
        return new ProdutoConcretoA1();
    }

    criaProdutoB(){
        return new ProdutoConcretoB1();
    }
}

//Fábrica 2 Concreta que cria produto do tipo A e B
class FabricaConcreta2 extends AbstractFactory{
    criaProdutoA(){
        return new ProdutoConcretoA2();
    }

    criaProdutoB(){
        return new ProdutoConcretoB2();
    }
}

// 2 Interface dos produtos do Tipo A:
class ProdutoAbstratoA{
    metodoA(){}
}


//Implementação Concreta do Produto do Tipo A - Fábrica 1
class ProdutoConcretoA1 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do tipo A da fábrica 1";
    }
}

//Implementação Concreta do Produto do Tipo A - Fábrica 2
class ProdutoConcretoA2 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do tipo A da fábrica 2";
    }
}

//Interface dos produtos do Tipo B:
class ProdutoAbstratoB{
    metodoB(){}
}

//Implementação Concreta do Produto do Tipo B - Fábrica 1
class ProdutoConcretoB1 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do tipo B fábrica 1";
    }
}

//Implementação Concreta do Produto do Tipo B - Fábrica 2
class ProdutoConcretoB2 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do tipo B fábrica 2";
    }
}

//Uso do padrão abstract factory - implementação
function clienteCod(factory){
    const produtoA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();

    console.log(produtoA.metodoA());
    console.log(produtoB.metodoB());
}

//Exemplo de uso fábrica 1
const factory1 = new FabricaConcreta1();
clienteCod(factory1);

//Exemplo de uso fábrica 2
const factory2 = new FabricaConcreta2();
clienteCod(factory2);