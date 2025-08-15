#Classe base de Veículo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo
    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

#Subclasses de Veículo
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Caminhao(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

#Fábrica abstrata de Veículo
class FabricaDeVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError('O método deve ser implementado pela subclasse')
    
#Fábrica concreta de carro
class FabricaDeCarro(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

#Fábrica concreta de moto
class FabricaDeMoto(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Moto(modelo)
    
#Fábrica concreta de caminhão
class FabricaDeCaminhao(FabricaDeVeiculo):
    def criarVeiculo(self,modelo):
        return Caminhao(modelo)
    
#Uso da fábrica do projeto - Fábrica
fabricaDeCarro =  FabricaDeCarro()
carro1 = fabricaDeCarro.criarVeiculo('Sedan')
carro2 = fabricaDeCarro.criarVeiculo('Esportivo')
carro1.mostrarDetalhes()
carro2.mostrarDetalhes()

fabricaDeMoto =  FabricaDeMoto()
moto1 = fabricaDeMoto.criarVeiculo("Honda")
moto2 = fabricaDeMoto.criarVeiculo("Yamaha")
moto1.mostrarDetalhes()
moto2.mostrarDetalhes()

fabricaDeCaminhao =  FabricaDeCaminhao()
caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania")
caminhao2 = fabricaDeCaminhao.criarVeiculo("W-Cargo")
caminhao1.mostrarDetalhes()
caminhao2.mostrarDetalhes()