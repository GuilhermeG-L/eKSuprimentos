console.log ("TESTE");
    var Connection = require('tedious').Connection;  
    var config = {  
        server: 'eksuprimentos-server-1.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sqlserver', //update me
                password: 'Proj@MSsql15'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'eKSuprimentos'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement1();  
    });
    
    connection.connect();