# 1.1 - Implementação da interface de cor
class Cor:
    def __init__(self,cor):
        self.cor = cor

    def getCor(self):
        return self.cor  
    
# 1.2 - Implementação concreta de cores:
class CorVermelha(Cor):
    def __init__(self):
        super().__init__("Vemelho")

class CorAzul(Cor):
    def __init__(self):
        super().__init__("Azul")

class CorRoxo(Cor):
    def __init__(self):
         super().__init__("Roxo")

# 2.1 - Implementação da inteface de forma
class Forma:
    def __init__(self, cor):
        self.cor = cor
    
    def desenhar(self):
        raise NotImplementedError("Esse método precisa ser implementado pela subclasse")

# 2.2 - Abstração refinada
class Circulo(Forma):
    def desenhar(self):
        print(f'Desenhando um círculo {self.cor.getCor()}')

class Quadrado(Forma):
    def desenhar(self):
         print(f'Desenhando um quadrado {self.cor.getCor()}')

class Triangulo(Forma):
    def desenhar(self):
         print(f'Desenhando um triangulo {self.cor.getCor()}')

# 3 - Utilização - Cliente
vermelho = CorVermelha()
azul = CorAzul()
roxo = CorRoxo()

circulo1 = Circulo(vermelho)
circulo2 = Circulo(azul)
circulo3 = Circulo(vermelho)

quadrado1 = Quadrado(azul)
quadrado2 = Quadrado(roxo)

triangulo1 = Triangulo(azul)

circulo1.desenhar()
circulo2.desenhar()
circulo3.desenhar()

quadrado1.desenhar()
quadrado2.desenhar()

triangulo1.desenhar()