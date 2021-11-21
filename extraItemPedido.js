const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

  var inputB1 = document.querySelector('#inputB1');
  inputB1.addEventListener('change', ()=>{
    let codProd = parseInt(document.querySelector('#inputB1').value);


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
        `SELECT DISTINCT Nome, Preço
        FROM dbo.Produto
        Where CodProduto = \'${codProd}\'`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
          }
        }
      );

      // Variável do primeiro input.
      var i = 2;
      
      // Adiciona valores nos inputs.
      request.on("row", columns => {
        columns.forEach(column => {
          let valProd = ("%s\t%s", /*column.metadata.colName,*/ column.value);
          document.getElementById(`inputB${i}`).value = valProd;
          i++;
        });
      });

      connection.execSql(request);
    }})






      var inputB7 = document.querySelector('#inputB7');
      inputB7.addEventListener('change', ()=>{
        let codProd = parseInt(document.querySelector('#inputB7').value);

    
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
            `SELECT DISTINCT Nome, Preço
            FROM dbo.Produto
            Where CodProduto = \'${codProd}\'`,
            (err, rowCount) => {
              if (err) {
                console.error(err.message);
              }
              else {
                console.log(`${rowCount} linha(s) retornadas`);
              }
            }
          );
    
          // Variável do primeiro input.
          var i = 8;
          
          // Adiciona valores nos inputs.
          request.on("row", columns => {
            columns.forEach(column => {
              let valProd = ("%s\t%s", /*column.metadata.colName,*/ column.value);
              document.getElementById(`inputB${i}`).value = valProd;
              i++;
            });
          });
    
          connection.execSql(request);
        }})







            var inputB13 = document.querySelector('#inputB13');
            inputB13.addEventListener('change', ()=>{
              let codProd = parseInt(document.querySelector('#inputB13').value);

          
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
                  `SELECT DISTINCT Nome, Preço
                  FROM dbo.Produto
                  Where CodProduto = \'${codProd}\'`,
                  (err, rowCount) => {
                    if (err) {
                      console.error(err.message);
                    }
                    else {
                      console.log(`${rowCount} linha(s) retornadas`);
                    }
                  }
                );
          
                // Variável do primeiro input.
                var i = 14;
                
                // Adiciona valores nos inputs.
                request.on("row", columns => {
                  columns.forEach(column => {
                    let valProd = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                    document.getElementById(`inputB${i}`).value = valProd;
                    i++;
                  });
                });
          
                connection.execSql(request);
              }})








                  var inputB19 = document.querySelector('#inputB19');
                  inputB19.addEventListener('change', ()=>{
                    let codProd = parseInt(document.querySelector('#inputB19').value);

                
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
                        `SELECT DISTINCT Nome, Preço
                        FROM dbo.Produto
                        Where CodProduto = \'${codProd}\'`,
                        (err, rowCount) => {
                          if (err) {
                            console.error(err.message);
                          }
                          else {
                            console.log(`${rowCount} linha(s) retornadas`);
                          }
                        }
                      );
                
                      // Variável do primeiro input.
                      var i = 20;
                      
                      // Adiciona valores nos inputs.
                      request.on("row", columns => {
                        columns.forEach(column => {
                          let valProd = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                          document.getElementById(`inputB${i}`).value = valProd;
                          i++;
                        });
                      });
                
                      connection.execSql(request);
                    }})







                        var inputB25 = document.querySelector('#inputB25');
                        inputB25.addEventListener('change', ()=>{
                          let codProd = parseInt(document.querySelector('#inputB25').value);

                      
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
                              `SELECT DISTINCT Nome, Preço
                              FROM dbo.Produto
                              Where CodProduto = \'${codProd}\'`,
                              (err, rowCount) => {
                                if (err) {
                                  console.error(err.message);
                                }
                                else {
                                  console.log(`${rowCount} linha(s) retornadas`);
                                }
                              }
                            );
                      
                            // Variável do primeiro input.
                            var i = 26;
                            
                            // Adiciona valores nos inputs.
                            request.on("row", columns => {
                              columns.forEach(column => {
                                let valProd = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                                document.getElementById(`inputB${i}`).value = valProd;
                                i++;
                              });
                            });
                      
                            connection.execSql(request);
                          }})