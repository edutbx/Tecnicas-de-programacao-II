#Definindo partes da pizza
class Tamanho:
    def __init__(self, tipoTamanho):
        self.tipoTamanho = tipoTamanho

class Massa:
    def __init__(self, tipoMassa):
        self.tipoMassa = tipoMassa

class Molho:
    def __init__(self, tipoMolho):
        self.tipoMolho = tipoMolho

class Cobertura:
    def __init__(self, tipoCobertura):
        self.tipoCobertura = tipoCobertura

#Builder
class PizzaBuilder:
    def __init__(self):
        self.tamanho
        self.massa
        self.molho
        self.cobertura

    def addTamanho(self, tipoTamanho):
        self.tamanho = Tamanho(tipoTamanho)
        return self
    
    def addMassa(self, tipoMassa):
        self.massa = Massa(tipoMassa)
        return self
    
    def addMolho(self, tipoMolho):
        self.molho = Molho(tipoMolho)
        return self
    
    def addCobertura(self, tipoCobertura):
        self.cobertura = Cobertura(tipoCobertura)
        return self
    
    def construir(self):
        pizza = Pizza(self.tamanho, self.massa, self.molho, self.cobertura)
        return pizza
    
#Construir pizza
class Pizza:
    def __init__(self, tamanho, massa, molho, cobertura):
        self.tamanho = tamanho
        self.massa = massa
        self.molho = molho
        self.cobertura = cobertura

    def mostrarDetalhes(self):
        print(f"Pizza com tamanho {self.tamanho.tipoTamanho}\n massa: {self.massa.tipoMassa}\n molho: {self.molho.tipoMolho}\n cobertura: {self.cobertura.tipoCobertura}\n")

#Uso do modelo builder - construindo uma pizza
pizzaDePortuguesa = (
    PizzaBuilder()
    .addTamanho('Grande')
    .addMassa('Fina')
    .addMolho('Vermelho')
    .addCobertura('Queijo')
    .construir()
)