const createMenu = require('../src/restaurant');

/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/
const menuDoDia2 = {
  food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
  drink: { 'agua': 3.90, 'cerveja': 6.90 }
};

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.

    const esperado = createMenu({ food: {}, drink: {} });
    expect(Object.keys(esperado)).toContain('fetchMenu');

    // 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.

    const menuDoDia = createMenu({ food: {}, drink: {} });
    const result = ['food', 'drink'];
    expect(Object.keys(menuDoDia.fetchMenu)).toEqual(result);

    // 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.

    expect(createMenu(menuDoDia2).fetchMenu).toEqual(menuDoDia2);

    // 4: Faça a implementação do item 4 do README no arquivo src/restaurant.js.

    // 5: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.

    expect(createMenu(menuDoDia2).consumption).toEqual([]);

    // 6: Faça a implementação do item 6 do README no arquivo src/restaurant.js.

    // 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro
    // - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
    // - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
    // Ex: obj.order('coxinha') --> ['coxinha']

    const cliente = createMenu(menuDoDia2);
    cliente.order('coxinha')
    expect(cliente.consumption).toEqual(['coxinha']);

    // Ex: obj.order('picanha') --> Exibe "Item indisponível"
    const cliente2 = createMenu(menuDoDia2);
    // cliente2.order('picanha')
    expect(cliente2.order('picanha')).toBe('Item indisponível');

    expect(cliente2.consumption).toEqual([]);

    // 8: Faça a implementação do item 8 do README no arquivo src/restaurant.js.

    // 9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    const cliente3 = createMenu(menuDoDia2);
    cliente3.order('coxinha');
    cliente3.order('sanduiche');
    cliente3.order('agua');
    expect(cliente3.consumption).toEqual(['coxinha', 'sanduiche', 'agua']);

    // 10: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.
    const cliente4 = createMenu(menuDoDia2);
    cliente4.order('agua');
    cliente4.order('agua');
    cliente4.order('agua');
    expect(cliente4.consumption).toEqual(['agua', 'agua', 'agua']);

    // 11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.
    const cliente5 = createMenu(menuDoDia2);
    cliente5.order('coxinha')
    expect(cliente5.pay()).toBe(4.29);
    const cliente6 = createMenu(menuDoDia2);
    cliente6.order('coxinha');
    cliente6.order('sanduiche');
    cliente6.order('agua');
    expect(cliente6.pay()).toBe(19.47);
    const cliente7 = createMenu(menuDoDia2);
    cliente7.order('agua');
    cliente7.order('agua');
    cliente7.order('agua');
    expect(cliente7.pay()).toBe(12.87);
    const cliente8 = createMenu(menuDoDia2);
    cliente8.order('coxinha')
    cliente8.order('picanha')
    expect(cliente5.pay()).toBe(4.29);
    // 12: Faça a implementação do item 12 do README no arquivo src/restaurant.js.
  });
});
