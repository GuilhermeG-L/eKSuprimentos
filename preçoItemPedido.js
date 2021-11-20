const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

var inputB2 = document.querySelector('#inputB2');
inputB2.addEventListener('change', ()=>{
  let codProd = parseInt(document.querySelector('#inputB1').value);
  let metr = parseInt(document.querySelector('#inputB2').value);
  let qtd = parseInt(document.querySelector('#inputB3').value);

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
        document.querySelector('#inputB4').value = valItem;
        i++;
      });
    });

    connection.execSql(request);
  }})



  var inputB1 = document.querySelector('#inputB1');
  inputB1.addEventListener('change', ()=>{
    let codProd = parseInt(document.querySelector('#inputB1').value);
    let metr = parseInt(document.querySelector('#inputB2').value);
    let qtd = parseInt(document.querySelector('#inputB3').value);

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
          document.querySelector('#inputB4').value = valItem;
          i++;
        });
      });

      connection.execSql(request);
    }})




    var inputB3 = document.querySelector('#inputB3');
    inputB3.addEventListener('change', ()=>{
      let codProd = parseInt(document.querySelector('#inputB1').value);
      let metr = parseInt(document.querySelector('#inputB2').value);
      let qtd = parseInt(document.querySelector('#inputB3').value);
  
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
            document.querySelector('#inputB4').value = valItem;
            i++;
          });
        });
  
        connection.execSql(request);
      }})




      var inputB5 = document.querySelector('#inputB5');
      inputB5.addEventListener('change', ()=>{
        let codProd = parseInt(document.querySelector('#inputB5').value);
        let metr = parseInt(document.querySelector('#inputB6').value);
        let qtd = parseInt(document.querySelector('#inputB7').value);
    
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
              document.querySelector('#inputB8').value = valItem;
              i++;
            });
          });
    
          connection.execSql(request);
        }})




        var inputB6 = document.querySelector('#inputB6');
        inputB6.addEventListener('change', ()=>{
          let codProd = parseInt(document.querySelector('#inputB5').value);
          let metr = parseInt(document.querySelector('#inputB6').value);
          let qtd = parseInt(document.querySelector('#inputB7').value);
      
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
                document.querySelector('#inputB8').value = valItem;
                i++;
              });
            });
      
            connection.execSql(request);
          }})





          var inputB7 = document.querySelector('#inputB7');
          inputB7.addEventListener('change', ()=>{
            let codProd = parseInt(document.querySelector('#inputB5').value);
            let metr = parseInt(document.querySelector('#inputB6').value);
            let qtd = parseInt(document.querySelector('#inputB7').value);
        
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
                  document.querySelector('#inputB8').value = valItem;
                  i++;
                });
              });
        
              connection.execSql(request);
            }})




            var inputB9 = document.querySelector('#inputB9');
            inputB9.addEventListener('change', ()=>{
              let codProd = parseInt(document.querySelector('#inputB9').value);
              let metr = parseInt(document.querySelector('#inputB10').value);
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
                let codProd = parseInt(document.querySelector('#inputB9').value);
                let metr = parseInt(document.querySelector('#inputB10').value);
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
                  let codProd = parseInt(document.querySelector('#inputB9').value);
                  let metr = parseInt(document.querySelector('#inputB10').value);
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
                    let metr = parseInt(document.querySelector('#inputB14').value);
                    let qtd = parseInt(document.querySelector('#inputB15').value);
                
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
                          document.querySelector('#inputB16').value = valItem;
                          i++;
                        });
                      });
                
                      connection.execSql(request);
                    }})



                    var inputB14 = document.querySelector('#inputB14');
                    inputB14.addEventListener('change', ()=>{
                      let codProd = parseInt(document.querySelector('#inputB13').value);
                      let metr = parseInt(document.querySelector('#inputB14').value);
                      let qtd = parseInt(document.querySelector('#inputB15').value);
                  
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
                            document.querySelector('#inputB16').value = valItem;
                            i++;
                          });
                        });
                  
                        connection.execSql(request);
                      }})



                      var inputB15 = document.querySelector('#inputB15');
                      inputB15.addEventListener('change', ()=>{
                        let codProd = parseInt(document.querySelector('#inputB13').value);
                        let metr = parseInt(document.querySelector('#inputB14').value);
                        let qtd = parseInt(document.querySelector('#inputB15').value);
                    
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
                              document.querySelector('#inputB16').value = valItem;
                              i++;
                            });
                          });
                    
                          connection.execSql(request);
                        }})



                        var inputB17 = document.querySelector('#inputB17');
                        inputB17.addEventListener('change', ()=>{
                          let codProd = parseInt(document.querySelector('#inputB17').value);
                          let metr = parseInt(document.querySelector('#inputB18').value);
                          let qtd = parseInt(document.querySelector('#inputB19').value);
                      
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
                                document.querySelector('#inputB20').value = valItem;
                                i++;
                              });
                            });
                      
                            connection.execSql(request);
                          }})



                          var inputB18 = document.querySelector('#inputB18');
                          inputB18.addEventListener('change', ()=>{
                            let codProd = parseInt(document.querySelector('#inputB17').value);
                            let metr = parseInt(document.querySelector('#inputB18').value);
                            let qtd = parseInt(document.querySelector('#inputB19').value);
                        
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
                                  document.querySelector('#inputB20').value = valItem;
                                  i++;
                                });
                              });
                        
                              connection.execSql(request);
                            }})



                            var inputB19 = document.querySelector('#inputB19');
                            inputB19.addEventListener('change', ()=>{
                              let codProd = parseInt(document.querySelector('#inputB17').value);
                              let metr = parseInt(document.querySelector('#inputB18').value);
                              let qtd = parseInt(document.querySelector('#inputB19').value);
                          
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
                                    document.querySelector('#inputB20').value = valItem;
                                    i++;
                                  });
                                });
                          
                                connection.execSql(request);
                              }})