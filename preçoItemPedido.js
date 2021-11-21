const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

var inputB4 = document.querySelector('#inputB4');
inputB4.addEventListener('change', ()=>{
  let codProd = parseInt(document.querySelector('#inputB1').value);
  let metr = parseFloat(document.querySelector('#inputB4').value);
  let qtd = parseInt(document.querySelector('#inputB5').value);

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
      `SELECT DISTINCT Preço
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
    var i = 1;
    
    // Adiciona valores nos inputs.
    request.on("row", columns => {
      columns.forEach(column => {
        let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
        let valItem = ((valProd * metr) * qtd);
        document.querySelector('#inputB6').value = valItem;
        i++;
      });
    });

    connection.execSql(request);
  }})



  var inputB1 = document.querySelector('#inputB1');
  inputB1.addEventListener('change', ()=>{
    let codProd = parseInt(document.querySelector('#inputB1').value);
    let metr = parseFloat(document.querySelector('#inputB4').value);
    let qtd = parseInt(document.querySelector('#inputB5').value);

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
        `SELECT DISTINCT Preço
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
      var i = 1;
      
      // Adiciona valores nos inputs.
      request.on("row", columns => {
        columns.forEach(column => {
          let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
          let valItem = ((valProd * metr) * qtd);
          document.querySelector('#inputB6').value = valItem;
          i++;
        });
      });

      connection.execSql(request);
    }})




    var inputB5 = document.querySelector('#inputB5');
    inputB5.addEventListener('change', ()=>{
      let codProd = parseInt(document.querySelector('#inputB1').value);
      let metr = parseFloat(document.querySelector('#inputB4').value);
      let qtd = parseInt(document.querySelector('#inputB5').value);
  
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
          `SELECT DISTINCT Preço
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
        var i = 1;
        
        // Adiciona valores nos inputs.
        request.on("row", columns => {
          columns.forEach(column => {
            let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
            let valItem = ((valProd * metr) * qtd);
            document.querySelector('#inputB6').value = valItem;
            i++;
          });
        });
  
        connection.execSql(request);
      }})




      var inputB7 = document.querySelector('#inputB7');
      inputB7.addEventListener('change', ()=>{
        let codProd = parseInt(document.querySelector('#inputB7').value);
        let metr = parseFloat(document.querySelector('#inputB10').value);
        let qtd = parseInt(document.querySelector('#inputB11').value);
    
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
            `SELECT DISTINCT Preço
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
          var i = 1;
          
          // Adiciona valores nos inputs.
          request.on("row", columns => {
            columns.forEach(column => {
              let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
              let valItem = ((valProd * metr) * qtd);
              document.querySelector('#inputB12').value = valItem;
              i++;
            });
          });
    
          connection.execSql(request);
        }})




        var inputB10 = document.querySelector('#inputB10');
        inputB10.addEventListener('change', ()=>{
          let codProd = parseInt(document.querySelector('#inputB7').value);
          let metr = parseFloat(document.querySelector('#inputB10').value);
          let qtd = parseInt(document.querySelector('#inputB11').value);
      
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
              `SELECT DISTINCT Preço
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
            var i = 1;
            
            // Adiciona valores nos inputs.
            request.on("row", columns => {
              columns.forEach(column => {
                let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                let valItem = ((valProd * metr) * qtd);
                document.querySelector('#inputB12').value = valItem;
                i++;
              });
            });
      
            connection.execSql(request);
          }})





          var inputB11 = document.querySelector('#inputB11');
          inputB11.addEventListener('change', ()=>{
            let codProd = parseInt(document.querySelector('#inputB7').value);
            let metr = parseFloat(document.querySelector('#inputB10').value);
            let qtd = parseInt(document.querySelector('#inputB11').value);
        
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
                `SELECT DISTINCT Preço
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
              var i = 1;
              
              // Adiciona valores nos inputs.
              request.on("row", columns => {
                columns.forEach(column => {
                  let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                  let valItem = ((valProd * metr) * qtd);
                  document.querySelector('#inputB12').value = valItem;
                  i++;
                });
              });
        
              connection.execSql(request);
            }})




            var inputB13 = document.querySelector('#inputB13');
            inputB13.addEventListener('change', ()=>{
              let codProd = parseInt(document.querySelector('#inputB13').value);
              let metr = parseFloat(document.querySelector('#inputB16').value);
              let qtd = parseInt(document.querySelector('#inputB17').value);
          
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
                  `SELECT DISTINCT Preço
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
                var i = 1;
                
                // Adiciona valores nos inputs.
                request.on("row", columns => {
                  columns.forEach(column => {
                    let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                    let valItem = ((valProd * metr) * qtd);
                    document.querySelector('#inputB18').value = valItem;
                    i++;
                  });
                });
          
                connection.execSql(request);
              }})




              var inputB16 = document.querySelector('#inputB16');
              inputB16.addEventListener('change', ()=>{
                let codProd = parseInt(document.querySelector('#inputB13').value);
                let metr = parseFloat(document.querySelector('#inputB16').value);
                let qtd = parseInt(document.querySelector('#inputB17').value);
            
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
                    `SELECT DISTINCT Preço
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
                  var i = 1;
                  
                  // Adiciona valores nos inputs.
                  request.on("row", columns => {
                    columns.forEach(column => {
                      let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                      let valItem = ((valProd * metr) * qtd);
                      document.querySelector('#inputB18').value = valItem;
                      i++;
                    });
                  });
            
                  connection.execSql(request);
                }})




                var inputB17 = document.querySelector('#inputB17');
                inputB17.addEventListener('change', ()=>{
                  let codProd = parseInt(document.querySelector('#inputB13').value);
                  let metr = parseFloat(document.querySelector('#inputB16').value);
                  let qtd = parseInt(document.querySelector('#inputB17').value);
              
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
                      `SELECT DISTINCT Preço
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
                    var i = 1;
                    
                    // Adiciona valores nos inputs.
                    request.on("row", columns => {
                      columns.forEach(column => {
                        let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                        let valItem = ((valProd * metr) * qtd);
                        document.querySelector('#inputB18').value = valItem;
                        i++;
                      });
                    });
              
                    connection.execSql(request);
                  }})



                  var inputB19 = document.querySelector('#inputB19');
                  inputB19.addEventListener('change', ()=>{
                    let codProd = parseInt(document.querySelector('#inputB19').value);
                    let metr = parseFloat(document.querySelector('#inputB22').value);
                    let qtd = parseInt(document.querySelector('#inputB23').value);
                
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
                        `SELECT DISTINCT Preço
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
                      var i = 1;
                      
                      // Adiciona valores nos inputs.
                      request.on("row", columns => {
                        columns.forEach(column => {
                          let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                          let valItem = ((valProd * metr) * qtd);
                          document.querySelector('#inputB24').value = valItem;
                          i++;
                        });
                      });
                
                      connection.execSql(request);
                    }})



                    var inputB22 = document.querySelector('#inputB22');
                    inputB22.addEventListener('change', ()=>{
                      let codProd = parseInt(document.querySelector('#inputB19').value);
                      let metr = parseFloat(document.querySelector('#inputB22').value);
                      let qtd = parseInt(document.querySelector('#inputB23').value);
                  
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
                          `SELECT DISTINCT Preço
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
                        var i = 1;
                        
                        // Adiciona valores nos inputs.
                        request.on("row", columns => {
                          columns.forEach(column => {
                            let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                            let valItem = ((valProd * metr) * qtd);
                            document.querySelector('#inputB24').value = valItem;
                            i++;
                          });
                        });
                  
                        connection.execSql(request);
                      }})



                      var inputB23 = document.querySelector('#inputB23');
                      inputB23.addEventListener('change', ()=>{
                        let codProd = parseInt(document.querySelector('#inputB19').value);
                        let metr = parseFloat(document.querySelector('#inputB22').value);
                        let qtd = parseInt(document.querySelector('#inputB23').value);
                    
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
                            `SELECT DISTINCT Preço
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
                          var i = 1;
                          
                          // Adiciona valores nos inputs.
                          request.on("row", columns => {
                            columns.forEach(column => {
                              let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                              let valItem = ((valProd * metr) * qtd);
                              document.querySelector('#inputB24').value = valItem;
                              i++;
                            });
                          });
                    
                          connection.execSql(request);
                        }})



                        var inputB25 = document.querySelector('#inputB25');
                        inputB25.addEventListener('change', ()=>{
                          let codProd = parseInt(document.querySelector('#inputB25').value);
                          let metr = parseFloat(document.querySelector('#inputB28').value);
                          let qtd = parseInt(document.querySelector('#inputB29').value);
                      
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
                              `SELECT DISTINCT Preço
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
                            var i = 1;
                            
                            // Adiciona valores nos inputs.
                            request.on("row", columns => {
                              columns.forEach(column => {
                                let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                                let valItem = ((valProd * metr) * qtd);
                                document.querySelector('#inputB30').value = valItem;
                                i++;
                              });
                            });
                      
                            connection.execSql(request);
                          }})



                          var inputB28 = document.querySelector('#inputB28');
                          inputB28.addEventListener('change', ()=>{
                            let codProd = parseInt(document.querySelector('#inputB25').value);
                            let metr = parseFloat(document.querySelector('#inputB28').value);
                            let qtd = parseInt(document.querySelector('#inputB29').value);
                        
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
                                `SELECT DISTINCT Preço
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
                              var i = 1;
                              
                              // Adiciona valores nos inputs.
                              request.on("row", columns => {
                                columns.forEach(column => {
                                  let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                                  let valItem = ((valProd * metr) * qtd);
                                  document.querySelector('#inputB30').value = valItem;
                                  i++;
                                });
                              });
                        
                              connection.execSql(request);
                            }})



                            var inputB29 = document.querySelector('#inputB29');
                            inputB29.addEventListener('change', ()=>{
                              let codProd = parseInt(document.querySelector('#inputB25').value);
                              let metr = parseFloat(document.querySelector('#inputB28').value);
                              let qtd = parseInt(document.querySelector('#inputB29').value);
                          
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
                                  `SELECT DISTINCT Preço
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
                                var i = 1;
                                
                                // Adiciona valores nos inputs.
                                request.on("row", columns => {
                                  columns.forEach(column => {
                                    let valProd = ("%s\t%s", /*column.metadata.colName,*/ parseFloat(column.value));
                                    let valItem = ((valProd * metr) * qtd);
                                    document.querySelector('#inputB30').value = valItem;
                                    i++;
                                  });
                                });
                          
                                connection.execSql(request);
                              }})