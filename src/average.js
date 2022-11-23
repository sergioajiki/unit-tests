/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function average(array) {
  if (array.length === 0) {
    console.log('undefined');
    return;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      console.log('undefined');
      return;
    }
  }
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index];
  }
  return Math.round(soma / array.length);
}
// average([3, 4, 5]);
// average([0, 0, 0, 0, 0, 0, 0]);
// average([1, 2, 3]);
// average([0, 0, 0, 0, 0, 0, 1]);
// average([47, 63, 122]);
// average([-11, 2, 5]);
// average([-11, -5, 2]);

// average([1, 2, 3, '4', 5]);
// average(['um', 'dois', 'tres']);
// average([1, 2, '3']);
// average([' ']);
// average([]);

module.exports = average;
