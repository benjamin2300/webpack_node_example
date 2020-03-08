const axios = require('axios');

axios.get("https://random.dog/woof.json")
  .then(function(value){
    console.log(value.data);
    
  })