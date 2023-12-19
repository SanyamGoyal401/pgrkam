const express = require('express');
const {ServerConfig, ConnectDB } = require('./config');
const apiRoutes = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    //mongoDB connection
    ConnectDB();
    console.log(`Server is up at ${ServerConfig.PORT}`);
})
