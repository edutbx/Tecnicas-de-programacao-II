# 1 Interface Abstract Factory
class AbstractFactory:
    def criaProdutoA(self):
        pass
    def criaProdutoB(self):
        pass

#Fábrica 1 Concreta que cria produto do tipo A e B
class FabricaConcreta1(AbstractFactory): 
    def criaProdutoA(self):
        return ProdutoConcretoA1()
    
    def criaProdutoB(self):
        return ProdutoConcretoB1()

#Fábrica 2 Concreta que cria produto do tipo A e B
class  FabricaConcretaA2(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA2()
    
    def criaProdutoB(self):
        return ProdutoConcretoB2()

# 2 Interface dos produtos do Tipo A:
class ProdutoAbstratoA:
    def metodoA(self):
        pass        

#Implementação Concreta do Produto do Tipo A - Fábrica 1
class ProdutoConcretoA1(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do tipo A da fábrica 1"

#Implementação Concreta do Produto do Tipo A - Fábrica 2
class ProdutoConcretoA2(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do tipo A da fábrica 2"

#Interface dos produtos do Tipo B:
class ProdutoAbstratoB:
    def metodoB(self):
        pass

#Implementação Concreta do Produto do Tipo B - Fábrica 1
class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do tipo B da fábrica 1"

#Implementação Concreta do Produto do Tipo B - Fábrica 2
class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do tipo B da fábrica 2"

#Uso do padrão abstract factory - implementação
def clienteCod(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()

    print(produtoA.metodoA())
    print(produtoB.metodoB())

#Exemplo de uso fábrica 1
factory1 = FabricaConcreta1()
clienteCod(factory1)

#Exemplo de uso fábrica 2
factory2 = FabricaConcretaA2()
clienteCod(factory2)