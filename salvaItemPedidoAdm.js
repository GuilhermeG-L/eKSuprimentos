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
codprodutoantigo2 = parseInt(document.querySelector('#inputB7').value);
codprodutoantigo3 = parseInt(document.querySelector('#inputB13').value);
codprodutoantigo4 = parseInt(document.querySelector('#inputB19').value);
codprodutoantigo5 = parseInt(document.querySelector('#inputB25').value);
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
    let metragem = parseFloat(document.querySelector('#inputB4').value);
    let quantidade = parseInt(document.querySelector('#inputB5').value);
    let preçoitem = parseFloat(document.querySelector('#inputB6').value);
  


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
        Where CodProduto = \'${codprodutoantigo1}\' AND CodPedido = \'${cod}\'`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroupdate');}
            else {}
            //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
      let codproduto = parseInt(document.querySelector('#inputB7').value);
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
          Where CodProduto = \'${codprodutoantigo2}\' AND CodPedido = \'${cod}\'`,
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            }
            else {
              console.log(`${rowCount} linha(s) retornadas`);
              if (rowCount != 1) {ipc.send('erroupdate');}
              else {}
              //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
        let metragem = parseFloat(document.querySelector('#inputB16').value);
        let quantidade = parseInt(document.querySelector('#inputB17').value);
        let preçoitem = parseFloat(document.querySelector('#inputB18').value);
      
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
            Where CodProduto = \'${codprodutoantigo3}\' AND CodPedido = \'${cod}\'`,
            (err, rowCount) => {
              if (err) {
                console.error(err.message);
              }
              else {
                console.log(`${rowCount} linha(s) retornadas`);
                if (rowCount != 1) {ipc.send('erroupdate');}
                else {}
                //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
          let codproduto = parseInt(document.querySelector('#inputB19').value);
          let metragem = parseFloat(document.querySelector('#inputB22').value);
          let quantidade = parseInt(document.querySelector('#inputB23').value);
          let preçoitem = parseFloat(document.querySelector('#inputB24').value);
        
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
              Where CodProduto = \'${codprodutoantigo4}\' AND CodPedido = \'${cod}\'`,
              (err, rowCount) => {
                if (err) {
                  console.error(err.message);
                }
                else {
                  console.log(`${rowCount} linha(s) retornadas`);
                  if (rowCount != 1) {ipc.send('erroupdate');}
                  else {}
                  //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
            let codproduto = parseInt(document.querySelector('#inputB25').value);
            let metragem = parseFloat(document.querySelector('#inputB28').value);
            let quantidade = parseInt(document.querySelector('#inputB29').value);
            let preçoitem = parseFloat(document.querySelector('#inputB30').value);
          
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
                Where CodProduto = \'${codprodutoantigo5}\' AND CodPedido = \'${cod}\'`,
                (err, rowCount) => {
                  if (err) {
                    console.error(err.message);
                  }
                  else {
                    console.log(`${rowCount} linha(s) retornadas`);
                    if (rowCount != 1) {ipc.send('erroupdate');}
                    else {}
                    //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
    setTimeout(f1, 100);
    function f1() {
    let codNew = parseInt(document.querySelector('#input1').value);
    let codcliente = parseInt(document.querySelector('#input2').value);
    let codvendedor = parseInt(document.querySelector('#input4').value);
    let codproduto = parseInt(document.querySelector('#inputB1').value);
    let metragem = parseFloat(document.querySelector('#inputB4').value);
    let quantidade = parseInt(document.querySelector('#inputB5').value);
    let preçoitem = parseFloat(document.querySelector('#inputB6').value);
  
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

            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {}
            else {}
            //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
    }}})
  
  
    var btnConcluir = document.querySelector('.btnConcluir');
    btnConcluir.addEventListener('click', ()=>{
      setTimeout(f2, 100);
      function f2() {
      let codNew = parseInt(document.querySelector('#input1').value);
      let codcliente = parseInt(document.querySelector('#input2').value);
      let codvendedor = parseInt(document.querySelector('#input4').value);
      let codproduto = parseInt(document.querySelector('#inputB7').value);
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

              console.error(err.message);
            }
            else {
              console.log(`${rowCount} linha(s) retornadas`);
              if (rowCount != 1) {ipc.send('erroinsert');}
              else {}
              //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
      }}})



      var btnConcluir = document.querySelector('.btnConcluir');
      btnConcluir.addEventListener('click', ()=>{
        setTimeout(f3, 100);
        function f3() {
        let codNew = parseInt(document.querySelector('#input1').value);
        let codcliente = parseInt(document.querySelector('#input2').value);
        let codvendedor = parseInt(document.querySelector('#input4').value);
        let codproduto = parseInt(document.querySelector('#inputB13').value);
        let metragem = parseFloat(document.querySelector('#inputB16').value);
        let quantidade = parseInt(document.querySelector('#inputB17').value);
        let preçoitem = parseFloat(document.querySelector('#inputB18').value);
      
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

                console.error(err.message);
              }
              else {
                console.log(`${rowCount} linha(s) retornadas`);
                if (rowCount != 1) {ipc.send('erroinsert');}
                else {}
                //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
        }}})


        var btnConcluir = document.querySelector('.btnConcluir');
        btnConcluir.addEventListener('click', ()=>{
          setTimeout(f4, 100);
          function f4() {
          let codNew = parseInt(document.querySelector('#input1').value);
          let codcliente = parseInt(document.querySelector('#input2').value);
          let codvendedor = parseInt(document.querySelector('#input4').value);
          let codproduto = parseInt(document.querySelector('#inputB19').value);
          let metragem = parseFloat(document.querySelector('#inputB22').value);
          let quantidade = parseInt(document.querySelector('#inputB23').value);
          let preçoitem = parseFloat(document.querySelector('#inputB24').value);
        
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

                  console.error(err.message);
                }
                else {
                  console.log(`${rowCount} linha(s) retornadas`);
                  if (rowCount != 1) {ipc.send('erroinsert');}
                  else {}
                  //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
          }}})


          var btnConcluir = document.querySelector('.btnConcluir');
          btnConcluir.addEventListener('click', ()=>{
            setTimeout(f5, 100);
            function f5() {
            let codNew = parseInt(document.querySelector('#input1').value);
            let codcliente = parseInt(document.querySelector('#input2').value);
            let codvendedor = parseInt(document.querySelector('#input4').value);
            let codproduto = parseInt(document.querySelector('#inputB25').value);
            let metragem = parseFloat(document.querySelector('#inputB28').value);
            let quantidade = parseInt(document.querySelector('#inputB29').value);
            let preçoitem = parseFloat(document.querySelector('#inputB30').value);
          
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

                    console.error(err.message);
                  }
                  else {
                    console.log(`${rowCount} linha(s) retornadas`);
                    if (rowCount != 1) {ipc.send('erroinsert');}
                    else {}
                    //window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
            }}})

}