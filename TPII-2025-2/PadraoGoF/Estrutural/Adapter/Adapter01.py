# 1 - Interface do Cliente
class AplicacaoCliente:
    def request(self):
        pass
class Cliente:
    def __init__(self, target):
        self.target = target

    def criaRequest(self):
        print("Cliente - Fazendo uma requisição")
        self.target.request()

# 2 - Serviço Existente
class Adaptee:
    def especificaRequest(self):
        print("Requisição especifica do Adaptee")

# 3 - Adapter 
class Adapter:
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.especificaRequest()

# 4 - Utilizando o Adaptar
adaptee = Adaptee()
adapter = Adapter(adaptee)
cliente = Cliente(adapter)

# Fazendo uma requisição - Requisição específica do Adaptee
cliente.criaRequest()