/* eslint-disable max-len */

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

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!
*/

// Faça os ítens de 1 a 3 no arquivo tests/restaurant.spec.js

// 4: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.

const fetchMenu = (objetoPassadoPorParametro) => objetoPassadoPorParametro;

const createMenu = (objetoPassadoPorParametro) => {
  const objetoRetornado = {
    fetchMenu: {},
  };
  Object.assign(objetoRetornado.fetchMenu, fetchMenu(objetoPassadoPorParametro));
  objetoRetornado.consumption = [];
  objetoRetornado.order = (item) => {
    const valuesObjetoPassadoPorParametro = Object.values(objetoPassadoPorParametro);
    for (index in valuesObjetoPassadoPorParametro) {
      const soKeys = Object.keys(valuesObjetoPassadoPorParametro[index]);
      for (i in soKeys) {
        if (soKeys[i] === item) {
          objetoRetornado.consumption.push(soKeys[i])
        }
      }
    }
    return 'Item indisponível'
  };
  objetoRetornado.pay = () => {
    let contaAPagar = 0;
    const comanda = cliente.consumption;
    const tabelaDePreco = Object.values(fetchMenu(objetoPassadoPorParametro));
    for (let index = 0; index < tabelaDePreco.length; index += 1) {
      const categoria = tabelaDePreco[index]
      // console.log(categoria)
      // console.log(comanda)
      for (let item in categoria) {
        // console.log(categoria)
        for (let i = 0; i < comanda.length; i += 1) {
          // console.log(item)
          // console.log(comanda[i])
          // console.log(categoria[item])
          if (comanda[i] === item) {
            contaAPagar = contaAPagar + categoria[item]
          }
          console.log(contaAPagar)
        }
        // console.log(contaAPagar)
        // console.log(comanda)
        // console.log(categoria[item])
      }
      // console.log(contaAPagar)
    }
  }
  // console.log(tabelaDePreco)
  // console.log(comanda)
  // console.log(Object.keys(tabelaDePreco)
  // console.log(Object.keys(tabelaDePreco[index]))
  // console.log(Object.keys(tabelaDePreco))
  // console.log(Object.values(tabelaDePreco))
  // console.log(Object.entries(tabelaDePreco))

  return objetoRetornado;
}
const menuDoDia2 = {
  food: { 'coxinha': 2, 'sanduiche': 10 }, drink: { 'agua': 4, 'cerveja': 7 },
};
const cliente = createMenu(menuDoDia2);
cliente.order('coxinha');
cliente.order('sanduiche');
cliente.order('agua');
cliente.order('cerveja');
cliente.pay();
// console.log(cliente.consumption)
createMenu({ food: {}, drink: {} })

// const soKeys = Object.keys(tabelaDePreco[index])
// console.log(soma)
// for (i in soKeys) {
//   for (item in comanda) {
//     // console.log(comanda[item])
//     // console.log(soKeys[i])
//     if (comanda[item] === soKeys[i]) {
//       soma = soma + (Object.values(tabelaDePreco[i])[i])
//       // console.log(typeof(Object.values(tabelaDePreco[i]))[i])
//       console.log(Object.values(tabelaDePreco[i])[i])
//  soma = soma + Object.values(tabelaDePreco[i])

// console.log(soma)

// console.log(Object.keys(tabelaDePreco[index]))        
// console.log(comanda[i])
// console.log(Object.values(soKeys[index]))        
// console.log(soKeys[i])

// }
// soma dos itens de consumption
// }
// console.log(objetoRetornado)

// }


// Faça o item 5 no arquivo tests/restaurant.spec.js

// 6: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.

// Faça o item 7 no arquivo tests/restaurant.spec.js

// 8: Crie uma função, associada à chave 'order', que, ao receber uma string como parâmetro, adiciona essa string ao array da chave 'consumption'.
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"

// Faça os ítens de 9 a 11 no arquivo tests/restaurant.spec.js

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
