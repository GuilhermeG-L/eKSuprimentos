const { Connection, Request } = require("tedious");

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

var cod = pegarCod("cod");

if (cod > 0) {
  
  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
    let codcliente = parseInt(document.querySelector('#input2').value);
    let codvendedor = parseInt(document.querySelector('#input3').value);
    let codproduto = parseInt(document.querySelector('#inputB1').value);
    let metragem = parseFloat(document.querySelector('#inputB2').value);
    let quantidade = parseInt(document.querySelector('#inputB3').value);
    let preçoitem = parseFloat(document.querySelector('#inputB4').value);
    
    // Gerar total do pedido.    


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
        console.error(err.message);
      } else {queryDatabase();}
    });

    // Conexão do DB.
    connection.connect();

    // Função de criação de Query.
    function queryDatabase() {
      console.log("Lendo dados da tabela...");

      const request = new Request(
        `UPDATE dbo.Pedido
        SET CodPedido = \'${cod}\', CodCliente = \'${codcliente}\', CodVendedor = \'${codvendedor}\', CodProduto \'${codproduto}\', Quantidade \'${quantidade}\', Metragem \'${metragem}\', Preço_do_item \'${preçoitem}\'
        Where CodPedido = \'${cod}\'`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            window.location = '../Telas Adm/gerenciarPedidosAdm.html';
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
    }})}
else {

  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
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
        console.error(err.message);
      } else {queryDatabase();}
    });
  
    // Conexão do DB.
    connection.connect();
  
    // Função de criação de Query.
    function queryDatabase() {
      console.log("Lendo dados da tabela...");
  
      const request = new Request(
        `Insert Into dbo.Pedido values (\'${cod}\', \'${codcliente}\', \'${codvendedor}\', \'${codproduto}\', \'${quantidade}\', \'${metragem}\', \'${preçoitem}\');`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            window.location = '../Telas Adm/gerenciarProdutosAdm.html';
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
    }})}

      
    console.log('Data Entrega: ' + dataentrega)
    console.log('Data Realização: ' + datarealizacao)