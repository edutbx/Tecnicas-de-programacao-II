// 1. MEDIADOR - Torre de Controle:
class TorreDeControle {
    constructor() {
        this.aeronaves = new Set();     // Aeronaves registradas
        this.pistaLivre = true;         // Estado da pista
        this.fila = [];                 // Fila de eventos
    }

    registrar(aeronave) {
        aeronave.definirMediator(this);
        this.aeronaves.add(aeronave);
    }

    notificar(remetente, tipo, dados = {}) {
        const prioridade = dados.emergencia ? 0 : 1;
        const evento = { remetente, tipo, dados, prioridade };

        // Caso for emergência vai pro início:
        if (prioridade === 0) {
            this.fila.unshift(evento);
        } else {
            this.fila.push(evento);
        }

        this.processar();
    }

    processar() {
        if (!this.pistaLivre || this.fila.length === 0) {
            return;
        }

        const { remetente, tipo, dados } = this.fila.shift();
        this.pistaLivre = false;       // Ocupa a pista

        if (tipo === "pouso") {
            this.pouso(remetente);
        } else if (tipo === "decolagem") {
            this.decolagem(remetente);
        } else if (tipo === "emergencia") {
            this.emergencia(remetente, dados);
        }
    }

    pouso(aeronave) {
        console.log("----------------------------------------");
        console.log(`[OK ] Pouso Autorizado: ${aeronave.identificacao()}`);
        setTimeout(() => {
            console.log(`[END] Pousou: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "pousou");
            this.processar();
        }, 3000);
    }

    decolagem(aeronave) {
        console.log("----------------------------------------");
        console.log(`[OK ] Decolagem Autorizada: ${aeronave.identificacao()}`);
        setTimeout(() => {
            console.log(`[END] Decolou: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "decolou");
            this.processar();
        }, 3000);
    }

    emergencia(aeronave, dados) {
        console.log("----------------------------------------");
        console.log(`[SOS] EMERGÊNCIA: ${aeronave.identificacao()} - ${dados.motivo}`);
        setTimeout(() => {
            console.log(`[END] Emergência Atendida: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "emergência atendida");
            this.processar();
        }, 3000);
    }

    avisarOutros(remetente, msg) {
        for (const a of this.aeronaves) {
            if (a !== remetente) {
                console.log(`[AVISO] ${a.identificacao()} -> ${msg}`);
            }
        }
    }
}

// 2. AERONAVE - COMPONENTE BASE:
class Aeronave {
    constructor(prefixo, tipo) {
        this.prefixo = prefixo;
        this.tipo = tipo;
        this.mediator = null;
    }

    definirMediator(m) {
        this.mediator = m;
    }

    identificacao() {
        return `${this.tipo} - ${this.prefixo}`;
    }

    solicitarPouso() {
        this.mediator.notificar(this, "pouso");
    }

    solicitarDecolagem() {
        this.mediator.notificar(this, "decolagem");
    }

    declararEmergencia(motivo) {
        this.mediator.notificar(this, "emergencia", { emergencia: true, motivo });
    }
}

// 3. AERONAVES - ESPECIALIZAÇÕES:
class Aviao extends Aeronave {
    constructor(p) {
        super(p, "Avião");
    }
}

class Helicoptero extends Aeronave {
    constructor(p) {
        super(p, "Helicóptero");
    }
}

class Ultraleve extends Aeronave {
    constructor(p) {
        super(p, "Ultraleve");
    }
}

// 4. USO DO PADRÃO - FUNCIONAMENTO:
(function operacao() {
    const torre = new TorreDeControle();

    const aviao = new Aviao("PT-AVA");
    const helicoptero = new Helicoptero("PT-HEL");
    const ultraleve = new Ultraleve("PT-ULI");

    torre.registrar(aviao);
    torre.registrar(helicoptero);
    torre.registrar(ultraleve);

    aviao.solicitarPouso();                             // Fila normal
    helicoptero.solicitarDecolagem();                   // Fila normal
    ultraleve.declararEmergencia("Falha elétrica");     // Prioridade máxima
})();
