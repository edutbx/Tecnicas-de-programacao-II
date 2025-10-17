#Flyweight Factory
class FabricaFlyweigth:
    def __init__(self):
        self.flyweights = {}
    
    def obterFlyweigth(self, id):
        if id not in self.flyweights:
            self.flyweights[id] = ProdutoFlyweigth(id)
        return self.flyweights[id]

#Flyweigth
class ProdutoFlyweigth:
    def __init__(self, id):
        self.id = id
    
    def exibir(self, nome, preco):
        print(f"ID: {self.id} | R${preco: .2f} | PROD: {nome}")

#Uso padrao
class Cliente:
    def __init__ (self):
        self.fabricaFlyweigth = FabricaFlyweigth()
        self.pedido = []

    def addProduto(self, id, nome, preco):
        FLYWEIGTHS = self.fabricaFlyweigth.obterFlyweigth(id)
        self.pedido.append({"flyweights": FLYWEIGTHS, "nome": nome, "preco": preco})

    def exibirPedido(self):
        print("Itens do pedido:")
        for item in self.pedido:
             item["flyweights"].exibir(item["nome"], item["preco"])

#Aplicação
valor = 99.99
CLIENTE = Cliente()

CLIENTE.addProduto("001", "Camiseta", 39.90)
CLIENTE.addProduto("002", "Touca", 19.90)
CLIENTE.addProduto("003", "Meia", 59.90)

CLIENTE.addProduto("002", "Chinelo", valor)
CLIENTE.addProduto("003", "Boeeeené", 49.90)

CLIENTE.exibirPedido()