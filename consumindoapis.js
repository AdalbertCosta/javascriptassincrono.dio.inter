//Consumindo APIs

// Etapa 01 - Consumindo APis

/* 

O que são Apis.
Application programming Interface para

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acesál-la por meio de URLs.


JSON: JavaScript Object Notation

É muito comum que APIs retornem seus dados no formato .json , por tandoo preecisamos tratar esses dados quando os recebermos.

*/

// Etapa 02 - fetch

// Consumindo APis

fecth(urk,options)
  .then(response => response.json())
  .then(json => console.log(json))  // retorna uma promisse

//fetch

fetch('https://endereço-api.com/',{
  method: 'GET',
  cache: 'no-cache',
})

.then(response => response.json())
.then(json => console.log(json)) //retorna uma promissess

/*************************************** */

fetch('https://endereço-api.com/',{
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
})

.then(response => response.json())
.then(json => console.log(json)) //retorna uma promissess

