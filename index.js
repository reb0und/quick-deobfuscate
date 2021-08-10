var axios = require('axios');

var args = process.argv[2];

args.replace(/\\/, '%');
args.replace(/, /, '+');
args.replace(/"/, '');
args.replace(/'/, '');

var data = `tool=ascii-code&ciphertext=${args}&output_hexa=false`;

var config = {
  method: 'post',
  url: 'https://www.dcode.fr/api/',
  headers: {
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
    'referer': 'https://www.dcode.fr/ascii-code',
    'cookie': 'PHPSESSID=6965dd8ae33c386093dba0f3f3328040;'
  },
  data: data
};

var idx = 0;

axios(config)
  .then(function (response) {
    if (response.data.results == undefined)
      console.log('Error parsing data');
    else
      var key = Object.keys(response.data.results)[idx];
    value = response.data.results[key]
    console.log(value);

  })
  .catch(function (error) {
    console.log(error);
  });


