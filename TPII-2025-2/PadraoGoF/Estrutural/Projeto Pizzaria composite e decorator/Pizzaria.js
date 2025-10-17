class ItemDePedido{
    obterPreco(){};
    obterNome(){};
}

//Folha
class Produto extends ItemDePedido(){
    constructor(nome, preco){
        super();
        this.nome = nome;
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

//Estrutura que irá compor
class ConjuntoDeItens extends ItemDePedido{
    constructor(nome){
        super(nome);
        this.nome = nome;
        this.conjuntoDeItens = [];
        this.custoExtra = 0;
    }

    adicionar(item){
        this.conjuntoDeItens.push(item);
        return this;
    }

    remover(item){
        this.conjuntoDeItens = this.conjuntoDeItens.filter(i => i !== item);
        return this;
    }

    obterPreco(){
        let preco = 0.;

        this.conjuntoDeItens.forEach(item =>{
            preco += item.obterPreco();
        })

        return preco + this.custoExtra;
    }

    obterNome(){
        return this.nome;
    }

    custoExtra(valor){
        this.custoExtra = valor || 0;
        return this;
    }
}

//Decorator
class ComponenteNotificador{
    enviar(msg){}
}

class Notificador extends ComponenteNotificador{
    constructor(componente){
        this.componente = componente;
    }

    enviar(msg){
        this.componente.enviar(msg);
    }
}

class NotificadorWpp extends Notificador{
    eviar(msg){
        super.enviar(msg);
        console.log(`Wpp - ${msg}`);
    }
}

class NotificadorEmail extends Notificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Email - ${msg}`);
    }
}

class NotificadorSms extends Notificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`SMS - ${msg}`);
    }
}
    