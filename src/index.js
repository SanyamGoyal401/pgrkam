const express = require('express');
const {ServerConfig, ConnectDB } = require('./config');
const apiRoutes = require('./routes')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())

app.use('/api', apiRoutes);
app.use('', (req, res)=>{
    res.status(200).json({
        message: "Server is live."
    })
})
app.listen(ServerConfig.PORT, ()=>{
    //mongoDB connection
    ConnectDB();
    console.log(`Server is up at ${ServerConfig.PORT}`);
})
