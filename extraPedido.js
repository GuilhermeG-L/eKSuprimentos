const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

  var input3 = document.querySelector('#input3');
  input3.addEventListener('change', ()=>{
    let nome = (document.querySelector('#input3').value);


    // Configuração de conexão DB.
    const config = {
      authentication: {
        options: {
          userName: "sqlserver",
          password: "Proj@MSsql15"
        },
        type: "default"
      },
      server: "34.151.252.122",
      options: {
        database: "eKSuprimentos",
        encrypt: true
      }
    };

    // Query Azure SQL: Busca Produto.
    const connection = new Connection(config);

    // Tentativa de conexão.
    connection.on("connect", err => {
      if (err) {
        ipc.send('erroconexao');
      } else {queryDatabase();}
    });

    // Conexão do DB.
    connection.connect();

    // Função de criação de Query.
    function queryDatabase() {
      console.log("Lendo dados da tabela...");

      const request = new Request(
        `SELECT DISTINCT CodCliente
        FROM dbo.Cliente
        Where Nome = \'${nome}\'`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
          }
        }
      );

      
      // Adiciona valores nos inputs.
      request.on("row", columns => {
        columns.forEach(column => {
          let valCli = ("%s\t%s", /*column.metadata.colName,*/ column.value);
          document.getElementById(`input2`).value = valCli;
        });
      });

      connection.execSql(request);
    }})



    var input5 = document.querySelector('#input5');
    input5.addEventListener('change', ()=>{
      let nome = (document.querySelector('#input5').value);
  
  
      // Configuração de conexão DB.
      const config = {
        authentication: {
          options: {
            userName: "sqlserver",
            password: "Proj@MSsql15"
          },
          type: "default"
        },
        server: "34.151.252.122",
        options: {
          database: "eKSuprimentos",
          encrypt: true
        }
      };
  
      // Query Azure SQL: Busca Produto.
      const connection = new Connection(config);
  
      // Tentativa de conexão.
      connection.on("connect", err => {
        if (err) {
          ipc.send('erroconexao');
        } else {queryDatabase();}
      });
  
      // Conexão do DB.
      connection.connect();
  
      // Função de criação de Query.
      function queryDatabase() {
        console.log("Lendo dados da tabela...");
  
        const request = new Request(
          `SELECT DISTINCT CodVendedor
          FROM dbo.Vendedor
          Where Nome = \'${nome}\'`,
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            }
            else {
              console.log(`${rowCount} linha(s) retornadas`);
            }
          }
        );
  
        
        // Adiciona valores nos inputs.
        request.on("row", columns => {
          columns.forEach(column => {
            let valCli = ("%s\t%s", /*column.metadata.colName,*/ column.value);
            document.getElementById(`input4`).value = valCli;
          });
        });
  
        connection.execSql(request);
      }})