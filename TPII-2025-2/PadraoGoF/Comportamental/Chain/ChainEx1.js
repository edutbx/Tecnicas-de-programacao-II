// 1. Classe base
class Logger{
    constructor(){
        this.proximo = null;
    }

    setProximo(proximo) {
        this.proximo = proximo;
    }

    logs(nivel) {
        throw new Error("Método deve ser implementado nas subclasses");
    }
}

// 2. Etapas concretas
class LoggerConsole extends Logger{
    logs(nivel){
        if (nivel === "INFO"){
            console.log(`Console tratou log do nível: ${nivel}`);
        }else if (this.proximo) {
            this.proximo.logs(nivel);
        }
    }
}

class LoggerArquivo extends Logger{
    logs(nivel){
        if (nivel === "INFO" || nivel === "WARNING"){
            console.log(`Arquivo tratou log do nível: ${nivel}`);
        }else if(this.proximo){
            this.proximo.logs(nivel);
        }
    }
}

class LoggerEmail extends Logger{
    logs(nivel){
        if (nivel === "ERROR"){
            console.log(`Email tratou log do nível: ${nivel}`);
        }else if(this.proximo){
            this.proximo.logs(nivel);
        }
    }
}

// 3 Uso do padrão
const consol = new LoggerConsole();
const arquivo = new LoggerArquivo();
const email = new LoggerEmail();

consol.setProximo(arquivo);
arquivo.setProximo(email);

// Teste
consol.logs("INFO");
consol.logs("WARNING");
consol.logs("ERROR");
