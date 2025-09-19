# Componente Notificador:
class ComponenteNotificador:
    def enviar(self, msg):
        print(f'Enviado msg: {msg}')

# Componente decorator base
class DecoradorNotificador:
    def __init__(self,componente):
        self.componente = componente

    def enviar(self, msg):
        self.componente.enviar(msg)

# Componente decorator concretro 1 - sms
class NotificadorSMS(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por SMS: {msg}')

#Componente decorator concreto 2 - wpp
class NotificadorWhatsapp(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por wpp: {msg}')

#Componente decorator concreto 3 - email
class NotificacaoEmail(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por email: {msg}')

notificador = ComponenteNotificador()
notificadorSMS = NotificadorSMS(notificador)
notificadorWhatsapp = NotificadorWhatsapp(notificadorSMS)

notificadorWhatsapp.enviar("Pedido saindo...")