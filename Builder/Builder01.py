#Definido parte de um carro
class Motor:
    def __init__(self,tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self,estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class Interior:
    def __init__(self,cor):
        self.cor = cor


#Builder
def __init__(self):
    self.reset()

class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def addMotor(self, tipo):
        self.motor = Motor(tipo)
        return self
    
    def addCarroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self
    
    def addRodas(self, tamanho):
        self.rodas = Rodas(tamanho)
        return self
    
    def addInterior(self, cor):
        self.interior = Interior(cor)
        return self
    
    def construir(self):
        carro = Carro(self.motor, self.carroceria, self.rodas, self.interior)
        return carro
    
#Construir carro    
class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrarDetalhes(self):
        print(f"Carro com motor: {self.motor.tipo}\n carroceria: {self.carroceria.estilo}\n rodas: {self.rodas.tamanho}\n interior: {self.interior.cor}\n")

#Uso do modelo builder - construindo um carro
carroEsportivo = (
    CarroBuilder()
    .addMotor('V8')
    .addCarroceria('Esportivo')
    .addRodas(18)
    .addInterior('Vermelho')
    .construir()
)

carroSedan = (
    CarroBuilder()
    .addMotor('1.4 LT')
    .addCarroceria('Sedan')
    .addRodas(14)
    .addInterior('Preto')
    .construir()
)

carroEsportivo.mostrarDetalhes()
carroSedan.mostrarDetalhes()

