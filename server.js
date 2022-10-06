const express = require('express')
// express server is a middleware between node backend and our code
        cors = require('cors');

const API_PORT = process.env.PORT || 5001;
// defining a port for it 
const app = express();
// express is going to be tied to this variable, express is the command to start the server 

app.use(cors());

app.get('/api', function(req,res) {
    console.log('called')
    res.send({result: 'Hellooooo'})
    // when sending something, it needs to be an object, much easier to decode that on the frontend 
})

app.get('/quit', function(req,res) {
    console.log('Called quit!')
    res.send({result: 'Goodbyee'})
})

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))
