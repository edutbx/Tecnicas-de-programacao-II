// Proposta do exemplo Chain01: uma cadeia de desconto onde o 
// vendedor pode aprovar até 2.5%, o gerente pode aprovar até 5%, 
// o diretor até acima de 5 e até 10% e o CEO acima de 10%
// Conforme o desconto é solicitado, segue a cadeia para aprovação

// 1 CLASSE ABSTRATA

class DescontoHandler {
    constructor() {
        this.proximo = null;
    }

    setProximo(proximo) {
        this.proximo = proximo;
    }

    aprovarDesconto(percentual) {
        throw new Error("Esse método deve ser implementado pelas subclasses");
    }

}

// 2 CLASSE CONCRETA
class Vendedor extends DescontoHandler{
    aprovarDesconto(percentual){
        if (percentual <= 0.025){
            console.log(`Vendedor aprovou o desconto de ${percentual*100}%`);
        }else if(this.proximo){
            this.proximo.aprovarDesconto(percentual);
        }else{
            console.log("Desconto não pode ser aprovado.")
        }
    }
}


class Gerente extends DescontoHandler {
    aprovarDesconto(percentual) {
        if (percentual <= 0.05) {
            console.log(`Gerente aprovou o desconto de ${percentual * 100}%`);
        } else if (this.proximo) {
            this.proximo.aprovarDesconto(percentual);
        } else {
            console.log("Desconto não pode ser aprovado");
        }
    }
}

class Diretor extends DescontoHandler {
    aprovarDesconto(percentual) {
        if (percentual <= 0.10) {
            console.log(`Diretor aprovou o desconto de ${percentual * 100}%`);
        } else if (this.proximo) {
            this.proximo.aprovarDesconto(percentual);
        } else {
            console.log("Desconto não pode ser aprovado");
        }
    }
}

class CEO extends DescontoHandler{
    aprovarDesconto(percentual){
        console.log(`CEO aprovou o desconto de ${percentual*100}%`);
    }
}

// 3 USO DO PADRÃO CHAIN
// 3.1 Configuração da cadeia de responsabilidade 
const vendedor = new Vendedor();
const gerente = new Gerente();
const diretor = new Diretor();
const ceo = new CEO();

vendedor.setProximo(gerente);
gerente.setProximo(diretor);
diretor.setProximo(ceo);

// 3.2 Pedido de desconto
vendedor.aprovarDesconto(0.02) // Vendedor aprovar
vendedor.aprovarDesconto(0.09) // Gerente aprovar
vendedor.aprovarDesconto(0.3)  // diretor aprovar
vendedor.aprovarDesconto(0.20)  // CEO aprovar
gerente.aprovarDesconto(0.08)  // CEO aprovar
gerente.aprovarDesconto(0.02)  // CEO aprovar
