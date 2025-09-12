// 1 - Interface do cliente
class AplicacaoCliente{
    request() {}
}

class Cliente{
    constructor(target){
        this.target = target;
    }

    criaRequest(){
        console.log("Cliente - Fazendo uma requisição");
        this.target = this.target;
    }
}

// 2 - Serviço existente
class Adaptee{
    especificaRequest(){
        console.log("Requisição especifica do Adaptee")
    }
}

// 3 - Adapter
class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.especificaRequest();
    }
}

// 4 - Utilizando o adapter
const adaptee = new Adaptee();
const adapter = new Adaptee(adaptee);
const cliente = new Cliente(adapter);

 //Fazendo uma requisição - Requisição especifica do Adaptee:
 cliente.criaRequest();