//Flyweight factory
class FabricaFlyweight{
    constructor(){
        this.flyweights = {};
    }

    obterFlyweigth(id){
        if(!this.flyweights[id]){
            this.flyweights[id] = new ProdutoFlyweigth(id);
        }
        return this.flyweights[id];
    }
}
//Flyweight
class ProdutoFlyweigth{
    constructor(id){
        this.id = id;
    }

    exibir(nome,preco){
        console.log(`ID: ${this.id} | R$${preco.toFixed(2)} | PROD: ${nome}`);
    }
}

//Uso padrão
class Cliente{
    constructor(){
        this.fabricaFlyweight = new FabricaFlyweight();
        this.pedido = [];
    }

    addProduto(id, nome, preco){
        const flyweights = this.fabricaFlyweight.obterFlyweigth(id);
        this.pedido.push({flyweights, nome, preco});
    }

    exibirPedido(){
        console.log("Itens do pedido:")
        this.pedido.forEach(item => {
            item.flyweights.exibir(item.nome, item.preco);
        })
    }
}

//Aplicação
let valor = 99.99;
const cliente = new Cliente();

cliente.addProduto("001", "Camiseta", 39.90);
cliente.addProduto("002", "Touca", 19.90);
cliente.addProduto("003", "Meia", 59.90);

cliente.addProduto("002", "Chinelo", valor);
cliente.addProduto("003", "Boné", 49.90);

cliente.exibirPedido();