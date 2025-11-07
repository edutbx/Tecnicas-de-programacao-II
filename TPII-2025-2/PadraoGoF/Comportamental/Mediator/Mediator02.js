// 1. Mediador
class SIGAFake {
    constructor() {
        this.clientes = new Set();
        this.fila = [];
        this.livre = true;
    }
    registrar(comp) {
        comp.setMediador(this);
        this.clientes.add(comp);
    }
 
    buscar(nome) {
        // Correção: A propriedade é 'this.clientes', não 'this.componentes'
        return [...this.clientes].find(c => c.nome === nome);
    }
 
    notificar(remetente, tipo, dados = {}) {
        const prioridade = dados.urgente ? 0 : 1;
        const evt = { remetente, tipo, dados, prioridade };
 
        if (prioridade === 0) {
            this.fila.unshift(evt);
        } else {
            this.fila.push(evt);
        }
        this.processar();
    }
 
    processar() {
        if (!this.livre || this.fila.length === 0) {
            return;
        }
        this.livre = false;
 
        const { remetente, tipo, dados } = this.fila.shift();
 
        if (tipo === "matricula") {
            const sec = this.buscar("Secretaria");
            console.log(`SECRETARIA: Matricula de ${dados.aluno.nome} em ${dados.curso}`);
            setTimeout(() => { sec.aprovarMatricula(dados); this.liberar(); }, 3000);
        } else if (tipo === "matricula_ok") {
            dados.aluno.receber(`Matricula Confirmada em ${dados.curso}`);
            this.broadcast(remetente, `Matricula de ${dados.aluno.nome} em ${dados.curso} Concluido`);
            this.liberar();
        } else if (tipo === "inscricao_prova") {
            const provas = this.buscar("Provas");
            console.log(`Provas: Inscrição de ${dados.aluno.nome} para a prova de ${dados.disciplina}`);
            setTimeout(() => { provas.confirmarInscricao(dados); this.liberar(); }, 3000);
        } else if (tipo === "inscricao_ok") {
            dados.aluno.receber(`Inscrição confirmada em ${dados.disciplina}`);
            this.liberar();
        } else if (tipo === "lançar_notas") {
            const provas = this.buscar("Provas");
            console.log(`Provas: Lançando notas da disciplina ${dados.disciplina}`);
            // Correção: O método na classe Provas é 'registrarNota', não 'lancarNotas'
            setTimeout(() => { provas.registrarNota(dados); this.liberar(); }, 3000);
        } else if (tipo === "nota_publicada") {
            dados.aluno.receber(`Nota publicada em ${dados.disciplina}: ${dados.nota}`);
            this.liberar();
        } else if (tipo === "retificar_nota") {
            const provas = this.buscar("Provas");
            console.log(`Provas: Retificando nota de ${dados.aluno.nome} em ${dados.disciplina}`);
            setTimeout(() => { provas.retificarNota(dados); this.liberar(); }, 3000);
        } else if (tipo === "retificacao_ok") {
            dados.aluno.receber(`Nota retificada em ${dados.disciplina}: ${dados.nota}`);
            this.liberar();
        }
    }
    broadcast(remetente, msg) {
        // Correção: A propriedade é 'this.clientes', não 'this.componentes'
        for (const c of this.clientes) {
            if (c !== remetente) c.receber?.(msg);
        }
    }
    liberar() {
        this.livre = true;
        this.processar();
    }
 
}
 
// 2. Base:
class Componente {
    constructor(nome) {
        this.nome = nome;
        this.mediador = null;
    }
    setMediador(mediador) {
        this.mediador = mediador;
    }
    receber(msg) {
        console.log(`[${this.nome}] Recebeu: ${msg}`);
    }
}
 
// 3. Componentes:
 
class Aluno extends Componente {
    constructor(nome) {
        super(nome);
    }
 
    solicitarMatricula(curso) {
        this.mediador.notificar(this, "matricula", { aluno: this, curso });
    }
 
    inscreverProva(disciplina) {
        this.mediador.notificar(this, "inscricao_prova", { aluno: this, disciplina });
    }
 
    solicitarRetificacao(disciplina) {
        this.mediador.notificar(this, "retificar_nota", { aluno: this, disciplina, urgente: true });
    }
}
 
class Professor extends Componente {
    constructor(nome) {
        super(nome);
    }
 
    lancarNotas(aluno, disciplina, nota) {
        this.mediador.notificar(this, "lançar_notas", { professor: this, aluno, disciplina, nota });
    }
}
 
class Secretaria extends Componente {
    constructor() {
        super("Secretaria");
    }
 
    aprovarMatricula({ aluno, curso }) {
        console.log(`SECRETARIA: Matrícula aprovada para ${aluno.nome} em ${curso}`);
        this.mediador.notificar(this, "matricula_ok", { aluno, curso });
    }
}
 
class Provas extends Componente {
    constructor() {
        super("Provas");
        this.notas = new Map();
    }
 
    chave(aluno, disciplina) {
        return `${aluno.nome}::${disciplina}`;
    };
 
    confirmarInscricao({ aluno, disciplina }) {
        console.log(`PROVAS: Inscrição confirmada para ${aluno.nome} na prova de ${disciplina}`);
        this.mediador.notificar(this, "inscricao_ok", { aluno, disciplina });
    }
 
    // Correção: Renomeado de 'refistrarNota' para 'registrarNota'
    // Correção: Parâmetro alterado para desestruturar o objeto 'dados'
    registrarNota({ aluno, disciplina, nota }) {
        this.notas.set(this.chave(aluno, disciplina), nota);
        console.log(`PROVAS: Nota registrada para ${aluno.nome} em ${disciplina}: ${nota}`);
        this.mediador.notificar(this, "nota_publicada", { aluno, disciplina, nota });
    }
 
    retificarNota({ aluno, disciplina }) {
        const chave = this.chave(aluno, disciplina);
        const antiga = this.notas.get(chave) ?? 0;
        // Correção: 'Math.min' com um argumento não faz sentido.
        // A lógica provável é incrementar a nota, com um teto de 10.
        const nova = Math.min(antiga + 1, 10);
        this.notas.set(chave, nova);
        console.log(`PROVAS: Nota retificada para ${aluno.nome} em ${disciplina}: ${nova}`);
        this.mediador.notificar(this, "retificacao_ok", { aluno, disciplina, nota: nova });
    };
};
 
 
//4. Uso do mediador:
 
// Correção: 'demsotracao' -> 'demonstracao'
// Correção: Adicionado '()' no final para tornar a função auto-executável (IIFE)
(function demonstracao() {
    const sigafake = new SIGAFake();
 
    const aluno = new Aluno("Edutbx");
    const professor = new Professor("Prof de tpii");
    const secretaria = new Secretaria();
    const provas = new Provas();
 
    [aluno, professor, secretaria, provas].forEach(c => sigafake.registrar(c));
 
    aluno.solicitarMatricula("DSM");
    aluno.inscreverProva("Java");
    professor.lancarNotas(aluno, "Java", 7);
    aluno.solicitarRetificacao("Java");
}
)(); // <-- Correção: Adicionado () para executar a função
 