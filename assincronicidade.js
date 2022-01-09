//Definição, Promises e Async/Await

// Etapa 01 - Assincronicidade

// Etapa 02 - promissess
// Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.


// Promisses Estrutura

const myPromisse = new((resolve, reject) =>  {
  window.setTimeout(() => {
    resolve(console.log('resolvida'));
  }, 2000); //
});

// Promisses Manipulação

const myPromisse = new((resolve, reject) =>  {
  window.setTimeout(() => {
    resolve(console.log('resolvida'));
  }, 2000); //
});

await myPromisse
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
    .catch((result) => console.log(err.message));

// Epata 03 - Async/await

//Funções assíncronas precisam dessas duas palavras chaves
async function resolvePromisses() {
const myPromisse = new((resolve, reject) =>  {
  window.setTimeout(() => {
    resolve('Resolvida');
  }, 4000); //
});

const resolved = await myPromisse
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
    .catch((err) => console.log(err.message));

  return resolved;

}

// Funcções assíncronas também retornam Promisses!

// Usando try...catch...

async function resolvePromisses90{
  const myPromisse = new((resolve, reject) =>  {
    window.setTimeout(() => {
      resolve('resolvida');
    }, 3000);
  });

  let result;

  try {
    result = await myPromisse
      .then((result) => result + 'passando pelo then')
      .then((result) => + 'e agora acabou!')
  } catch(err) {
    result = err.message;
  }
    return result;
}








