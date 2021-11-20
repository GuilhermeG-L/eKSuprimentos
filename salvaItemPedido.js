const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

function pegarCod(parameter) {  
  var loc = location.search.substring(1, location.search.length);   
  var param_value = false;   
  var params = loc.split("&");   
  for (i=0; i<params.length;i++) {   
      param_name = params[i].substring(0,params[i].indexOf('='));   
      if (param_name == parameter) {                                          
          param_value = params[i].substring(params[i].indexOf('=')+1)   
      }   
  }   
  if (param_value) {   
      return param_value;   
  }   
  else {   
      return undefined;   
  }   
}


let codprodutoantigo1, codprodutoantigo2, codprodutoantigo3, codprodutoantigo4, codprodutoantigo5

function prodantigo () {

codprodutoantigo1 = parseInt(document.querySelector('#inputB1').value);
codprodutoantigo2 = parseInt(document.querySelector('#inputB5').value);
codprodutoantigo3 = parseInt(document.querySelector('#inputB9').value);
codprodutoantigo4 = parseInt(document.querySelector('#inputB13').value);
codprodutoantigo5 = parseInt(document.querySelector('#inputB17').value);
console.log(codprodutoantigo1, codprodutoantigo2, codprodutoantigo3);

}

function teste () {
  console.log(codprodutoantigo1);
}

setTimeout(prodantigo, 2000);
setTimeout(teste, 2000);

var cod = pegarCod("cod");

if (cod > 0) {



  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
    let codproduto = parseInt(document.querySelector('#inputB1').value);
    let metragem = parseFloat(document.querySelector('#inputB2').value);
    let quantidade = parseInt(document.querySelector('#inputB3').value);
    let preçoitem = parseFloat(document.querySelector('#inputB4').value);
  


    console.log(codproduto);
    console.log(metragem);
    console.log(quantidade);
    console.log(preçoitem);
    console.log(codprodutoantigo1);

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
        `UPDATE dbo.ItemPedido
        SET CodProduto = \'${codproduto}\', Quantidade = \'${quantidade}\', Metragem = \'${metragem}\', Preço_do_item = \'${preçoitem}\'
        Where CodProduto = \'${codprodutoantigo1}\'`,
        (err, rowCount) => {
          if (err) {
            ipc.send('erroupdate');
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroupdate');}
            else {}
            //window.location = '../Telas Vendedor/gerenciarPedidos.html';
          }
        }
      );
      
  
      request.on("row", columns => {
        columns.forEach(column => {
          valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
          console.log(valInput);
        });
      });
  
      connection.execSql(request);
    }})
  
  
    var btnConcluir = document.querySelector('.btnConcluir');
    btnConcluir.addEventListener('click', ()=>{
      let codproduto = parseInt(document.querySelector('#inputB5').value);
      let metragem = parseFloat(document.querySelector('#inputB6').value);
      let quantidade = parseInt(document.querySelector('#inputB7').value);
      let preçoitem = parseFloat(document.querySelector('#inputB8').value);
    
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
          `UPDATE dbo.ItemPedido
          SET CodProduto = \'${codproduto}\', Quantidade = \'${quantidade}\', Metragem = \'${metragem}\', Preço_do_item = \'${preçoitem}\'
          Where CodProduto = \'${codprodutoantigo2}\'`,
          (err, rowCount) => {
            if (err) {
              ipc.send('erroupdate');
            }
            else {
              console.log(`${rowCount} linha(s) retornadas`);
              if (rowCount != 1) {ipc.send('erroupdate');}
              else {}
              //window.location = '../Telas Vendedor/gerenciarPedidos.html';
            }
          }
        );
        
    
        request.on("row", columns => {
          columns.forEach(column => {
            valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
            console.log(valInput);
          });
        });
    
        connection.execSql(request);
      }})



      var btnConcluir = document.querySelector('.btnConcluir');
      btnConcluir.addEventListener('click', ()=>{
        let codproduto = parseInt(document.querySelector('#inputB9').value);
        let metragem = parseFloat(document.querySelector('#inputB10').value);
        let quantidade = parseInt(document.querySelector('#inputB11').value);
        let preçoitem = parseFloat(document.querySelector('#inputB12').value);
      
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
            `UPDATE dbo.ItemPedido
            SET CodProduto = \'${codproduto}\', Quantidade = \'${quantidade}\', Metragem = \'${metragem}\', Preço_do_item = \'${preçoitem}\'
            Where CodProduto = \'${codprodutoantigo3}\'`,
            (err, rowCount) => {
              if (err) {
                ipc.send('erroupdate');
              }
              else {
                console.log(`${rowCount} linha(s) retornadas`);
                if (rowCount != 1) {ipc.send('erroupdate');}
                else {}
                //window.location = '../Telas Vendedor/gerenciarPedidos.html';
              }
            }
          );
          
      
          request.on("row", columns => {
            columns.forEach(column => {
              valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
              console.log(valInput);
            });
          });
      
          connection.execSql(request);
        }})


        var btnConcluir = document.querySelector('.btnConcluir');
        btnConcluir.addEventListener('click', ()=>{
          let codproduto = parseInt(document.querySelector('#inputB13').value);
          let metragem = parseFloat(document.querySelector('#inputB14').value);
          let quantidade = parseInt(document.querySelector('#inputB15').value);
          let preçoitem = parseFloat(document.querySelector('#inputB16').value);
        
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
              `UPDATE dbo.ItemPedido
              SET CodProduto = \'${codproduto}\', Quantidade = \'${quantidade}\', Metragem = \'${metragem}\', Preço_do_item = \'${preçoitem}\'
              Where CodProduto = \'${codprodutoantigo4}\'`,
              (err, rowCount) => {
                if (err) {
                  ipc.send('erroupdate');
                }
                else {
                  console.log(`${rowCount} linha(s) retornadas`);
                  if (rowCount != 1) {ipc.send('erroupdate');}
                  else {}
                  //window.location = '../Telas Vendedor/gerenciarPedidos.html';
                }
              }
            );
            
        
            request.on("row", columns => {
              columns.forEach(column => {
                valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                console.log(valInput);
              });
            });
        
            connection.execSql(request);
          }})


          var btnConcluir = document.querySelector('.btnConcluir');
          btnConcluir.addEventListener('click', ()=>{
            let codproduto = parseInt(document.querySelector('#inputB17').value);
            let metragem = parseFloat(document.querySelector('#inputB18').value);
            let quantidade = parseInt(document.querySelector('#inputB19').value);
            let preçoitem = parseFloat(document.querySelector('#inputB20').value);
          
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
                `UPDATE dbo.ItemPedido
                SET CodProduto = \'${codproduto}\', Quantidade = \'${quantidade}\', Metragem = \'${metragem}\', Preço_do_item = \'${preçoitem}\'
                Where CodProduto = \'${codprodutoantigo5}\'`,
                (err, rowCount) => {
                  if (err) {
                    ipc.send('erroupdate');
                  }
                  else {
                    console.log(`${rowCount} linha(s) retornadas`);
                    if (rowCount != 1) {ipc.send('erroupdate');}
                    else {}
                    //window.location = '../Telas Vendedor/gerenciarPedidos.html';
                  }
                }
              );
              
          
              request.on("row", columns => {
                columns.forEach(column => {
                  valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                  console.log(valInput);
                });
              });
          
              connection.execSql(request);
            }})
















}








else {
  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
    let codNew = parseInt(document.querySelector('#input1').value);
    let codcliente = parseInt(document.querySelector('#input2').value);
    let codvendedor = parseInt(document.querySelector('#input3').value);
    let codproduto = parseInt(document.querySelector('#inputB1').value);
    let metragem = parseFloat(document.querySelector('#inputB2').value);
    let quantidade = parseInt(document.querySelector('#inputB3').value);
    let preçoitem = parseFloat(document.querySelector('#inputB4').value);
  
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
        `Insert Into dbo.ItemPedido values (\'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
        (err, rowCount) => {
          if (err) {
            ipc.send('erroinsert');
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroinsert');}
            else {}
            //window.location = '../Telas Vendedor/gerenciarPedidos.html';
          }
        }
      );
      
  
      request.on("row", columns => {
        columns.forEach(column => {
          valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
          console.log(valInput);
        });
      });
  
      connection.execSql(request);
    }})
  
  
    var btnConcluir = document.querySelector('.btnConcluir');
    btnConcluir.addEventListener('click', ()=>{
      let codNew = parseInt(document.querySelector('#input1').value);
      let codcliente = parseInt(document.querySelector('#input2').value);
      let codvendedor = parseInt(document.querySelector('#input3').value);
      let codproduto = parseInt(document.querySelector('#inputB5').value);
      let metragem = parseFloat(document.querySelector('#inputB6').value);
      let quantidade = parseInt(document.querySelector('#inputB7').value);
      let preçoitem = parseFloat(document.querySelector('#inputB8').value);
    
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
          `Insert Into dbo.ItemPedido values (\'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
          (err, rowCount) => {
            if (err) {
              ipc.send('erroinsert');
            }
            else {
              console.log(`${rowCount} linha(s) retornadas`);
              if (rowCount != 1) {ipc.send('erroinsert');}
              else {}
              //window.location = '../Telas Vendedor/gerenciarPedidos.html';
            }
          }
        );
        
    
        request.on("row", columns => {
          columns.forEach(column => {
            valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
            console.log(valInput);
          });
        });
    
        connection.execSql(request);
      }})



      var btnConcluir = document.querySelector('.btnConcluir');
      btnConcluir.addEventListener('click', ()=>{
        let codNew = parseInt(document.querySelector('#input1').value);
        let codcliente = parseInt(document.querySelector('#input2').value);
        let codvendedor = parseInt(document.querySelector('#input3').value);
        let codproduto = parseInt(document.querySelector('#inputB9').value);
        let metragem = parseFloat(document.querySelector('#inputB10').value);
        let quantidade = parseInt(document.querySelector('#inputB11').value);
        let preçoitem = parseFloat(document.querySelector('#inputB12').value);
      
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
            `Insert Into dbo.ItemPedido values (\'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
            (err, rowCount) => {
              if (err) {
                ipc.send('erroinsert');
              }
              else {
                console.log(`${rowCount} linha(s) retornadas`);
                if (rowCount != 1) {ipc.send('erroinsert');}
                else {}
                //window.location = '../Telas Vendedor/gerenciarPedidos.html';
              }
            }
          );
          
      
          request.on("row", columns => {
            columns.forEach(column => {
              valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
              console.log(valInput);
            });
          });
      
          connection.execSql(request);
        }})


        var btnConcluir = document.querySelector('.btnConcluir');
        btnConcluir.addEventListener('click', ()=>{
          let codNew = parseInt(document.querySelector('#input1').value);
          let codcliente = parseInt(document.querySelector('#input2').value);
          let codvendedor = parseInt(document.querySelector('#input3').value);
          let codproduto = parseInt(document.querySelector('#inputB13').value);
          let metragem = parseFloat(document.querySelector('#inputB14').value);
          let quantidade = parseInt(document.querySelector('#inputB15').value);
          let preçoitem = parseFloat(document.querySelector('#inputB16').value);
        
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
              `Insert Into dbo.ItemPedido values (\'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
              (err, rowCount) => {
                if (err) {
                  ipc.send('erroinsert');
                }
                else {
                  console.log(`${rowCount} linha(s) retornadas`);
                  if (rowCount != 1) {ipc.send('erroinsert');}
                  else {}
                  //window.location = '../Telas Vendedor/gerenciarPedidos.html';
                }
              }
            );
            
        
            request.on("row", columns => {
              columns.forEach(column => {
                valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                console.log(valInput);
              });
            });
        
            connection.execSql(request);
          }})


          var btnConcluir = document.querySelector('.btnConcluir');
          btnConcluir.addEventListener('click', ()=>{
            let codNew = parseInt(document.querySelector('#input1').value);
            let codcliente = parseInt(document.querySelector('#input2').value);
            let codvendedor = parseInt(document.querySelector('#input3').value);
            let codproduto = parseInt(document.querySelector('#inputB17').value);
            let metragem = parseFloat(document.querySelector('#inputB18').value);
            let quantidade = parseInt(document.querySelector('#inputB19').value);
            let preçoitem = parseFloat(document.querySelector('#inputB20').value);
          
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
                `Insert Into dbo.ItemPedido values (\'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
                (err, rowCount) => {
                  if (err) {
                    ipc.send('erroinsert');
                  }
                  else {
                    console.log(`${rowCount} linha(s) retornadas`);
                    if (rowCount != 1) {ipc.send('erroinsert');}
                    else {}
                    //window.location = '../Telas Vendedor/gerenciarPedidos.html';
                  }
                }
              );
              
          
              request.on("row", columns => {
                columns.forEach(column => {
                  valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
                  console.log(valInput);
                });
              });
          
              connection.execSql(request);
            }})

}