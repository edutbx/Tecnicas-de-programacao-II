# SUBSISTEMA 1
class SistemaPagamento:
    def processar_pagamento(self, valor):
        print(f"Processando Pagamento no valor de R${valor}")

# SUBSISTEMA 2
class SistemaLogistica:
    def enviar_produto(self, destinatario):
        print(f"Enviando Produto para {destinatario}")

# SUBSISTEMA 3
class SistemaNotificacao:
    def enviar_email(self, destinatario, mensagem):
        print(f"Enviando e-mail para {destinatario}: {mensagem}")

# LOJAONLINE - FAÇADE (FACHADA)
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()

    def realizar_compra(self, produto, destinatario):
        self.pagamento.processar_pagamento(produto['preco'])
        self.notificacao.enviar_email(destinatario, "Pagamento Realizado com Sucesso...")
        self.logistica.enviar_produto(destinatario)
        self.notificacao.enviar_email(destinatario, f"Pedido de {produto['nome']} foi enviado...")

# EXEMPLO DE USO - LOJAONLINE
loja = LojaOnline()

produto = {'nome': 'Camiseta', 'preco': 29.90}
destinatario = 'Joao da Silva - cliente@gmail.com'

loja.realizar_compra(produto, destinatario)
