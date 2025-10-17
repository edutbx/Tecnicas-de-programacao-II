/*
    Nome do aluno: Alice Laila Silva Pires
    RA: 2171392421003
*/

// COMPOSITE ============================

// Comum para itens de pedido
class ItemDePedido{
    obterNome(){}
    obterPreco(){}
}

// Folha 
class Produto extends ItemDePedido{
    constructor(nome, preco){
        super();
        this.nome = nome
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

// Composite
class ConjuntoDeItens extends ItemDePedido{
    constructor(nome){
        super(nome);
        this.nome = nome;
        this.conjuntoItens = [];
        this.custoExtra = 0;
    }
    
    adicionar(item){
        this.conjuntoItens.push(item);
        return this
    }

    remover(item){
        const index = this.conjuntoItens.indexOf(item);
        if (index !== -1) this.conjuntoItens.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;

        this.conjuntoItens.forEach(item => {
            preco += item.obterPreco();
        })

        return preco + this.custoExtra;
    }

    setCustoExtra(valor){
        this.custoExtra = valor || 0;
        return this;
    }
}

// DECORATOR ============================

// Componentes Notificador:
class Notificador{
    enviar(msg){}
}

class NotificadorDecorator extends Notificador {
    constructor(componente) {
        super();
        this.componente = componente;
    }

    enviar(msg) {
        if (this.componente) {
            this.componente.enviar(msg);
        }
    }
}

class NotificadorSMS extends NotificadorDecorator {
    enviar(msg){
        super.enviar(msg);
        console.log(`[SMS]: ${msg}`)
    }
}

class NotificadorEmail extends NotificadorDecorator {
    enviar(msg){

        console.log(`[Email]: ${msg}`)
    }
}

class NotificadorWhatsApp extends NotificadorDecorator {
    enviar(msg){
        super.enviar(msg);
        console.log(`[WhatsApp]: ${msg}`)
    }
}

// PEDIDO ============================

class Pedido {
    constructor(cliente, arvoreDeItens){
        this.cliente = cliente;
        this.arvoreDeItens = arvoreDeItens
        this.status = "PENDENTE"
    }

    obterTotal(){
        return this.arvoreDeItens.obterPreco();
    }

    gerarResumoTexto(){
    const itens = this.arvoreDeItens.conjuntoItens
        .map(item => `\t - ${item.obterNome()} (R$ ${item.obterPreco().toFixed(2)})`)
        .join("\n");

        return `\nCliente: ${this.cliente.nome}\n 
        Itens pedidos:\n ${itens}\n
        Total: R$ ${this.obterTotal().toFixed(2)}
        `;
    }

    realizarCheckout(notificacao){
        this.status = "PAGO"
        const msg = `Pedido confirmado! Total: R$ ${this.obterTotal().toFixed(2)}`
        console.log(msg + `\n\tStatus: [${this.status}]`)
        notificacao.enviar(msg);
    }

}

// EXEMPLO DE USO ========================

// Código do Pedido Inteiro
const comboPrincipal = new ConjuntoDeItens("Pedido 1234")

// Custo extra de Entrega
const custoExtraEntrega = comboPrincipal.setCustoExtra(3.00);

// Pedidos ----------------------------

// Nivel 1
const comboPizzaGrande = new ConjuntoDeItens("Pizza Grande Meio a Meio")
    .adicionar(new Produto("Metade de Calabresa", 37.00))
    .adicionar(new Produto("Metade de Frango com Catupiry", 36.00))

// Nivel 2
const comboBroto = new ConjuntoDeItens("Pizzas Broto")
    .adicionar(new Produto("Metade de Calabresa", 37.00))
    .adicionar(new Produto("Metade de Frango com Catupiry", 36.00))

// Nivel 3
const comoboBebidas = new ConjuntoDeItens("Bebidas")
    .adicionar(new Produto("Fanta Uva (1L)", 23.99))
    .adicionar(new Produto("Suco de maracuja (500ml)", 24.00))


// Combos ------------------------------

comboPrincipal
    .adicionar(comboPizzaGrande)
    .adicionar(comboBroto)
    .adicionar(comoboBebidas)


// Resumo do Pedido --------------------
console.log('======== RESUMO DO PEDIDO ========');

const pedido = new Pedido({
    nome: "Alice",
    email: "alice.pires01@g.com",
    sms: "11 98090-8090",
    whatsapp: "11 98090-8090"
}, comboPrincipal);

console.log(pedido.gerarResumoTexto())


// Notificações -----------------------
// (Email, SMS, WhatsApp respectivamente)

let notificacao = new Notificador();
notificacao = new NotificadorEmail(notificacao);
notificacao = new NotificadorSMS(notificacao);
notificacao = new NotificadorWhatsApp(notificacao);

notificacao.enviar("PEDIDO ENVIADO")


// Status -----------------------------

console.log("\n==== CONFIRMAÇÃO DE PAGAMENTO ====\n")
pedido.realizarCheckout(notificacao);

console.log("\n")