// OBJETO REAL - CLASSE PRODUTO:
class Produto{
    constructor(nome, preco, codEAN){
        this.nome = nome;
        this.preco = preco;
        this.codEAN = codEAN;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome} | R$${this.preco.toFixed(2)} | CodEAN: ${this.codEAN}`)
    }
}

// PROXY - PROXYPRODUTO:
class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }

    exibirDetalhes(){
        console.log("Autenticando no Sistema");
        this.autenticar();
        console.log("Autenticaão realizada com sucesso")
        
        this.produto.exibirDetalhes();

        console.log("Registrando no sistema");
            //Funcionalidade 2
        console.log("Operação concluída");
        console.log("\n---------\n");
    }

    autenticar(){
        console.log(" >> Autenticancdo usuário");
        console.log(" >> Consultando dados");
        console.log(" >> Autenticação OK");
    }
}

// USO DO PADRAO:
const produtoReal1 = new Produto("Camiseta", 49.99, "123456789");
const produtoReal2 = new Produto("Shorts", 29.99, "987654321");
const ProxyProduto1 = new ProxyProduto(produtoReal1);
const ProxyProduto2 = new ProxyProduto(produtoReal2);

ProxyProduto1.exibirDetalhes();
ProxyProduto2.exibirDetalhes();

