/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.


export Greeting from './Greeting.js';
*/
import express from 'express';
import fetch from 'isomorphic-fetch';
import canonize from './canonize';

const app = express();
app.get('/canonize', (reg, res) => {
   // console.log(reg.query);
  const username = canonize(reg.query.url);
  return res.json({
    url: reg.query.url,
    username,
  });
  //  res.send('Hello World')
});

const baseUrl = 'http://pokeapi.co/api/v2';

async function getPokemons(url) {
  console.log('getPokemons', url);
  const response = await fetch(url);
  //console.log(response);
  const page = await response.json();
  const pokemons = page.results;
  return pokemons;
}

app.get('/', async (reg, res) => {
  try {
    const pakemonsUrl = `${baseUrl}/pokemon`;
    const pokemons = await getPokemons(pakemonsUrl);
    console.log(pokemons);
    return res.json({
      qwe: 123,
      pokemons,
    });
  } catch (err) {
    console.log(err);
    return res.json({ err });
  }
  //  res.send('Hello World')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// const array = [
//   'https://telegram.me/skillbranch',
//   'https://telegraw.me/skillbranch',
//   'https://telegram.me/skillbranch123',
// ];
//
// array.slice(0, 1).forEach((url) => {
//     const username = canonize(url);
//     console.log(username);
// });
