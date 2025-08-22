#Interface da Fábrica abstrata
class LojaAbstrata:
    def criaProdutoEletronico(self):
        pass
    def criaProdutoModa(self):
        pass

#Fábrica Concreta para criar produtos - loja física
class LojaFisica(LojaAbstrata):
    def criaProdutoEletronico(self):
        return Telefone()
    def criaProdutoModa(self):
        return Camiseta()
    
#Fábrica concreta para criar produtos - loja virtual
class LojaVirtual(LojaAbstrata):
    def criaProdutoEletronico(self):
        return Telefone()
    def criaProdutoModa(self):
        return Camiseta()
    
#Classe abstrata para produtos eletronicos
class ProdutoEletronico:
    def __init__(self):
        self.tipo = "Eletronico"
    
    def descricao(self):
        return f"Produto {self.tipo}: Telefone"

#Classe abstrata para produtos moda
class ProdutoModa:
    def __init__(self):
        self.tipo = "Moda"

    def descricao(self):
        return f"Produto {self.tipo}: Camiseta"
    
#Classe concreta para produtos eletronicos:
class Telefone(ProdutoEletronico):
    def descricao(self):
        return f"Produto {self.tipo}: Telefone"

#Classe concreta para produtos moda
class Camiseta(ProdutoModa):
    def descricao(self):
        return f"Produto {self.tipo}: Camiseta"

#Interface de simulação da loja:
def loja(cliente,loja):
    lojaFisica = loja.criaProdutoEletronico()
    LojaVirtual = loja.criaProdutoModa()

    print(f"{cliente} comprou.")
    print(lojaFisica.descricao())
    print(LojaVirtual.descricao())

#Aplicação da venda simulada
cliente1 = "edutbx"
lojaFisica = LojaFisica()
loja(cliente1, lojaFisica)

print("\n...\n")
cliente2 = "Felipao"
lojaVirtual = LojaVirtual()
loja(cliente2, lojaVirtual)
