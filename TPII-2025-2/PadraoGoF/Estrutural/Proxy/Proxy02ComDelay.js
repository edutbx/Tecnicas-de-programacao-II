// OBJETO REAL - CLASSE PRODUTO:
class Produto {
    constructor(nome, preco, codEAN) {
        this.nome = nome;
        this.preco = preco;
        this.codEAN = codEAN;
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome} | R$${this.preco.toFixed(2)} | CodEAN: ${this.codEAN}`);
    }
}

// PROXY - PROXYPRODUTO:
class ProxyProduto {
    constructor(produto) {
        this.produto = produto;
    }

    exibirDetalhes() {
        this.executarComDelay();
    }

    executarComDelay() {
        setTimeout(() => {
            console.log("Autenticando no Sistema");
        }, 0);

        setTimeout(() => {
            console.log(" >> Autenticando usuário");
        }, 1000);

        setTimeout(() => {
            console.log(" >> Consultando dados");
        }, 2000);

        setTimeout(() => {
            console.log(" >> Autenticação OK");
        }, 3000);

        setTimeout(() => {
            console.log("Autenticação realizada com sucesso");
            this.produto.exibirDetalhes();
        }, 4000);  // Atraso de 4 segundos

        setTimeout(() => {
            console.log("Registrando no sistema");
        }, 5000);  // Atraso de 5 segundos

        setTimeout(() => {
            console.log("Operação concluída");
            console.log("\n---------\n");
        }, 6000);  // Atraso de 6 segundos
    }
}

// USO DO PADRAO:
const produtoReal1 = new Produto("Camiseta", 49.99, "123456789");
const produtoReal2 = new Produto("Shorts", 29.99, "987654321");

const ProxyProduto1 = new ProxyProduto(produtoReal1);
const ProxyProduto2 = new ProxyProduto(produtoReal2);

// Chamar o primeiro produto e, após a conclusão, chamar o segundo
ProxyProduto1.exibirDetalhes();

// Aguardar o final do primeiro produto para começar o segundo com delay
setTimeout(() => {
    ProxyProduto2.exibirDetalhes();
}, 7000);  // Inicia o segundo após o término do primeiro (7 segundos após o início)
