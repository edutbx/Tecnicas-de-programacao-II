//Classe base de Veículo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }
    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`)
    }
}
//Subclasses de Veículo
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}
class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}
class Caminhao extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}
//Fábrica abstrata de Veículo
class FabricaDeVeiculo{
    criarVeiculo(modelo){
        throw new Error('O método deve ser implementado pela subclasse');
    }
}
//Fábrica concreta de carro
class FabricaDeCarro extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}
//Fábrica concreta de moto
class FabricaDeMoto extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}
//Fábrica concreta de caminhão
class FabricaDeCaminhao extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Caminhao(modelo);
    }
}
//Uso da fábrica do projeto - Fábrica
const fabricaDeCarro = new FabricaDeCarro();
const carro1 = fabricaDeCarro.criarVeiculo('Sedan');
const carro2 = fabricaDeCarro.criarVeiculo('Esportivo');
carro1.mostrarDetalhes();
carro2.mostrarDetalhes();

const fabricaDeMoto = new FabricaDeMoto();
const moto1 = fabricaDeMoto.criarVeiculo("Honda");
const moto2 = fabricaDeMoto.criarVeiculo("Yamaha");
moto1.mostrarDetalhes();
moto2.mostrarDetalhes();

const fabricaDeCaminhao = new FabricaDeCaminhao();
const caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania");
const caminhao2 = fabricaDeCaminhao.criarVeiculo("W-Cargo");
caminhao1.mostrarDetalhes();
caminhao2.mostrarDetalhes();