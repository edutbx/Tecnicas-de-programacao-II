import copy

#Classe pessoa - padrão que será clonado
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def __str__(self):
        return f"Nome:{self.nome}, Idade:{self.idade}"
    
    #Método clone - realiza uma cópia superficial do objeto
    def clone(self):
        return copy.copy(self)
    
    # como eu tinha feito !!
    # def clone(self):
    #     return Pessoa(self. id, self.nome, self.idade)

#Classe PessoaManager - gerencia instancias de pessoa
class PessoaManager:
    def __init__(self):
        self.pessoas = {}

#Método addPessoa - adiciona pessos ao dicionário Pessoas
    def addPessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa

#Método getPessoaId - Solicita uma pessoa pelo id e retorna uma cópia dela
    def getPessoaById(self, id):
       return self.pessoas[id].clone()
    
#Criando uma instância de PessoaManeger
manager = PessoaManager()

#Add três pessoas
manager.addPessoa('edutbx', 19, 1)
manager.addPessoa('pedrao', 24, 2)

#Clonando 1 Pessoa e modificando
pessoaClone1 = manager.getPessoaById(1)
if(pessoaClone1):
    pessoaClone1.nome = "edutbx menó ódio rlk do marcinho vp clone"

#Clonando Pessoa 2 e modificando
pessoaClone2 = manager.getPessoaById(2)
if(pessoaClone2):
    pessoaClone2.idade = 7528

print("Pessoa original - 1")
print(manager.getPessoaById(1))
print("Pessoa clonada 1")
print(pessoaClone1)
print(" ")
print("Pessoa original - 2")
print(manager.getPessoaById(2))
print("Pessoa clonada 2")
print(pessoaClone2)