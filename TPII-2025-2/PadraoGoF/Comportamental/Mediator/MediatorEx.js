// DESAFIO:
// Implemente o padrão Mediator simulando o funcionamento de uma pizzaria.Nenhum componente (Garçom, Cozinha, Forno, Caixa e Entrega) pode se comunicar diretamente.
// Toda comunicação deve passar pela classe PizzariaCentral, que atuará como o mediator.
// A PizzariaCentral deve: receber pedidos do garçom, gerenciar a fila de operações, dar prioridade a pedidos marcados como urgentes, encaminhar cada etapa do pedido ao próximo componente (Cozinha → Forno → Caixa → Entrega), garantir que apenas uma etapa seja processada por vez.
// Cada componente: envia eventos apenas para a PizzariaCentral, nunca chama métodos de outro componente diretamente.
// Demonstre o funcionamento criando três pedidos, incluindo um pedido urgente que deve furar a fila.