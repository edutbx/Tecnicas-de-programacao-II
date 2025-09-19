#Estrutura componente:
class Componente:
    def __init__(self,nome):
        self.nome = nome
    
    def adicionar(self):
        pass

    def remover(self):
        pass

    def obterNome(self):
        pass

#Estrutura Folha:
class Folha(Componente):
    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco

    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        return self.preco
    
#Estrutura que irá compor (Componente):
class Container(Componente):
    def __init__(self,nome):
        super().__init__(nome)
        self.componentes = []

    def adicionar(self, componente):
        self.componentes.append(componente)

    def remover(self, componente):
        index = self.componentes.index(componente)
        self.componentes.pop(index, 1)

    def obterNome(self):
        return self.nome

    def obterPreco(self):
        preco = 0
        for componente in self.componentes:
            preco += componente.obterPreco()
        return preco
    
#Exemplos de uso - Supermercado
maca = Folha('Maçã', 2.00)
laranja = Folha('Laranja', 3.00)
uva = Folha('Uva', 5.00)

frutas = Container('Frutas')
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)

caixa = Container('Compra Total')
caixa.adicionar(frutas)
caixa.adicionar(Folha('Embalagem', 2.00))

print(f'Preço Total: R${caixa.obterPreco()}')
