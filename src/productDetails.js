/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
// productDetails('mascara', 'luva')
// const teste = productDetails();
// console.log(teste);
// console.log(teste[0].details.productId);
// console.log(productDetails('mascara', 'luva'));
// console.log(Array.isArray(productDetails('mascara', 'luva')));
// console.log(productDetails('mascara', 'luva').length);
// console.log(typeof productDetails('mascara', 'luva')[0]);
// console.log(productDetails('mascara', 'luva')[0].details.productId);
// console.log(productDetails('mascara', 'luva')[0].details.productId.substr(-3));

module.exports = productDetails;
