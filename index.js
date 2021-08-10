var axios = require('axios');

var args = process.argv[2];
console.log(args);


var data = `tool=ascii-code&ciphertext=${args}&output_hexa=false`;

var config = {
  method: 'post',
  url: 'https://www.dcode.fr/api/',
  headers: {
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
    'referer': 'https://www.dcode.fr/ascii-code',
    'cookie': 'PHPSESSID=3bea32d8d3fb5a571126a89c99bd80e9;'
  },
  data: data
};

axios(config)
  .then(function (response) {
    if (response.data.results == undefined)
      console.log('Error parsing data');
    else
      console.log(JSON.stringify(response.data.results));
  })
  .catch(function (error) {
    console.log(error);
  });

