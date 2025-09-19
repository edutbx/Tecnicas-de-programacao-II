//Componente notificador
class ComponenteNotificador{
    enviar(msg){
        console.log(`Enviando msg: ${msg}`);
    }
}

//Componente decorator base
class DecoratorNotificador{
    constructor(componente){
        this.componente = componente;
    }

    enviar(msg){
        this.componente.enviar(msg);
    }
}

//Componentes decorator concreto 1 - SMS
class Notificador extends DecoratorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando msg por SMS: ${msg}`);
    }
}

// Componentes Decorador Concreto 1 - SMS:
class NotificadorSMS extends DecoratorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando msg por SMS: ${msg}`);
    }
}

// Componentes decorador concreto 2 - wpp
class NotificaWhatsapp extends DecoratorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando msg por wpp: ${msg}`);
    }
}

// Componentes decorador concreto 3 - email
class NotificaEmail extends DecoratorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando msg por email: ${msg}`);
    }
}

// Uso pelo cliente
const notificador = new ComponenteNotificador();
const notificadorSMS = new NotificadorSMS(notificador);
const notificadorWpp = new NotificaWhatsapp(notificadorSMS);

notificadorWpp.enviar("Pedido saindo");