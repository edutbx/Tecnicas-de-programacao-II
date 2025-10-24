// 1. Classe base
class EtapaProcesso {
    constructor() {
        this.proximaEtapa = null;
    }

    setProximaEtapa(proximaEtapa) {
        this.proximaEtapa = proximaEtapa;
    }

    processar(pagamento) {
        throw new Error("Esse método deve ser implementado pelas subclasses");
    }
}

// 2. Etapas concretas
class EtapaConexao extends EtapaProcesso {
    processar(pagamento) {
        console.log(">>> Estabelecendo conexão...");
        setTimeout(() => {
            console.log("[OK] Conexão estabelecida");
            if (this.proximaEtapa) {
                this.proximaEtapa.processar(pagamento);
            } else {
                console.log("[**] Falha na conexão - Processamento encerrado");
            }
        }, 1000);
    }
}

class EtapaValidacao extends EtapaProcesso {
    processar(pagamento) {
        console.log(">>>> Validando informações de pagamento...");
        setTimeout(() => {
            if (pagamento.valor > 0) {
                console.log("[OK] Informações do pagamento validadas com sucesso...");
                if (this.proximaEtapa) {
                    this.proximaEtapa.processar(pagamento);
                }
            } else {
                console.log("[**] Informações inválidas - Processamento encerrado");
            }
        }, 1500);
    }
}

class EtapaEnvioInformacoes extends EtapaProcesso {
    processar(pagamento) {
        console.log(">>>> Enviando informações de pagamento...");
        setTimeout(() => {
            console.log("[OK] Informações do pagamento enviadas com sucesso...");
            if (this.proximaEtapa) {
                this.proximaEtapa.processar(pagamento);
            }
        }, 1200);
    }
}

class EtapaAutenticacao extends EtapaProcesso {
    processar(pagamento) {
        console.log(">>>> Autenticando informações de pagamento...");
        setTimeout(() => {
            if (true) {
                console.log("[OK] Pagamento autenticado com sucesso...");
                if (this.proximaEtapa) {
                    this.proximaEtapa.processar(pagamento);
                }
            } else {
                console.log("[**] Autenticação inválida - Processo encerrado");
            }
        }, 1000);
    }
}

class EtapaConfirmacao extends EtapaProcesso {
    processar(pagamento) {
        console.log(">>>> Confirmando pagamento...");
        setTimeout(() => {
            console.log("[OK] Pagamento confirmado com sucesso!");
        }, 800);
    }
}

// 2.2 Objeto pagamento
class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }
}

// 3. Cliente - Uso do padrão
class Cliente {
    iniciarProcessoPagamento(valor) {
        // Criação das etapas:
        const etapaConexao = new EtapaConexao();
        const etapaValidacao = new EtapaValidacao();
        const etapaEnvioInformacoes = new EtapaEnvioInformacoes();
        const etapaAutenticacao = new EtapaAutenticacao();
        const etapaConfirmacao = new EtapaConfirmacao();

        // Configuração da cadeia:
        etapaConexao.setProximaEtapa(etapaValidacao);
        etapaValidacao.setProximaEtapa(etapaEnvioInformacoes);
        etapaEnvioInformacoes.setProximaEtapa(etapaAutenticacao);
        etapaAutenticacao.setProximaEtapa(etapaConfirmacao);

        // Criação do pagamento
        const pagamento = new Pagamento(valor);

        // Início do processo
        etapaConexao.processar(pagamento);
    }
}

// Usando o padrão
const cliente = new Cliente();
cliente.iniciarProcessoPagamento(100.00);
