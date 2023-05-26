const express = require('express');
const cors = require('cors');
const { bd_mmcbs } = require('../database/config');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT

        this.paths = {
            getDB: '/api/getDB',
        }

        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    
    async conectarDB(){
        try {
            await bd_mmcbs.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares() {
        this.app.use(cors());

        this.app.use( express.json() );
        
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.getDB, require('../routes/testDB'))
    }

    listen () {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto: ' + this.port)
        } );
    }
}

module.exports = Server;