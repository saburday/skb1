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

const baseUrl = 'http://pokeapi.co/api/v2/';
app.get('/', async (reg, res) => {

  const response = await fetch(`${baseUrl}pokemon`)
  //console.log(response);
  const pokemons = await response.json();

    // .then(function(response) {
    //     if (response.status >= 400) {
    //         throw new Error("Bad response from server");
    //     }
    //     return response.json();
    // })
    // .then(function(stories) {
    //     console.log(stories);
    // });

   // console.log(reg.query);

  return res.json({
    qwe: 123,
    pokemons,
  });
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
