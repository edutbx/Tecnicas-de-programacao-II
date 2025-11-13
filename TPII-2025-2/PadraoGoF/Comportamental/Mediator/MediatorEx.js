/*
DESAFIO: Implementar o padrão Mediator simulando uma pizzaria.
Nenhum módulo pode se comunicar diretamente: tudo passa pelo mediador CentralPizzaria.
Os pedidos urgentes têm prioridade e cada etapa deve ser processada uma de cada vez.
*/

// =====================
// MEDIADOR CONCRETO
// =====================
class CentralPizzaria {
  constructor() {
    this.modulos = [];
    this.fila = [];
  }

  registrar(modulo) {
    this.modulos.push(modulo);
    modulo.definirCentral(this);
  }

  adicionarPedido(pedido) {
    this.fila.push(pedido);

    // Ordena para priorizar urgentes
    this.fila.sort((a, b) => {
      if (a.urgente === b.urgente) return 0;
      return a.urgente ? -1 : 1;
    });

    this.log(`Pedido adicionado: ${pedido.toString()}`);
  }

  iniciarProcessamento() {
    while (this.fila.length > 0) {
      const atual = this.fila.shift();
      console.log("\n");

      this.log(`Processando ${atual}`);
      this.etapa("Atendente", `Pedido recebido para ${atual.cliente}`);
      this.etapa("Cozinha", "Preparando ingredientes...");
      this.etapa("Forno", "Assando a massa...");
      this.etapa("Pagamento", "Registrando pagamento...");
      this.etapa("Saindo", "Pedido saiu para entrega...");

      this.log(`Pedido concluído: ${atual}`);
      console.log("------------------------------------");
    }
  }

  etapa(origem, mensagem) {
    this.log(`[${origem}] ${mensagem}`);
  }

  log(msg) {
    console.log(`[Central] ${msg}`);
  }
}

// =====================
// COMPONENTE BASE
// =====================
class ModuloBase {
  constructor(nome) {
    this.nome = nome;
    this.central = null;
  }

  definirCentral(central) {
    this.central = central;
  }
}

// =====================
// MÓDULOS CONCRETOS
// =====================

class Atendente extends ModuloBase {
  constructor() {
    super("atendente");
  }

  registrarPedido(cliente, urgente) {
    const novoPedido = new Pedido(cliente, urgente);
    this.central.adicionarPedido(novoPedido);
  }
}

class Cozinha extends ModuloBase {
  constructor() {
    super("cozinha");
  }
}

class Forno extends ModuloBase {
  constructor() {
    super("forno");
  }
}

class Pagamento extends ModuloBase {
  constructor() {
    super("pagamento");
  }
}

class Saindo extends ModuloBase {
  constructor() {
    super("saindo");
  }
}

// =====================
// CLASSE PEDIDO
// =====================
class Pedido {
  static seq = 1;

  constructor(cliente, urgente) {
    this.id = Pedido.seq++;
    this.cliente = cliente;
    this.urgente = urgente;
  }

  toString() {
    return `Pedido #${this.id} (${this.cliente}${this.urgente ? ", URGENTE" : ""})`;
  }
}

// =====================
// EXECUÇÃO DO SISTEMA
// =====================
(function () {
  const central = new CentralPizzaria();

  const atendente = new Atendente();
  const cozinha = new Cozinha();
  const forno = new Forno();
  const pagamento = new Pagamento();
  const saindo = new Saindo();

  central.registrar(atendente);
  central.registrar(cozinha);
  central.registrar(forno);
  central.registrar(pagamento);
  central.registrar(saindo);

  // Criação de pedidos
  atendente.registrarPedido("Eduardo", false);
  atendente.registrarPedido("Fernando", true);  // URGENTE → fura fila
  atendente.registrarPedido("Zofia", false);

  central.iniciarProcessamento();

})();
