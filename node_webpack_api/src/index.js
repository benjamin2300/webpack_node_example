import axios from 'axios';

axios.get("https://random.dog/woof.json")
  .then((value) => {
    console.log(value.data);
    
  })
