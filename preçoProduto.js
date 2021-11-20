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

var cod = pegarCod("cod");
console.log(cod)
if (cod > 0) {

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
      `SELECT DISTINCT CodProduto, Metragem, Quantidade
      FROM dbo.ItemPedido
      Where CodPedido = \'${cod}\'`,
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
        valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
        document.getElementById(`inputB${i}`).value = valInput;
        i++;
      });
    });

    connection.execSql(request);
  }}


// PRA CASO CLIQUE EM ADICIONAR PRODUTO (Não tem cod):


else {

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
    // Adiciona +1 no código mais alto criado.
    const request = new Request(
      `SELECT DISTINCT max(CodPedido+1)
      FROM dbo.ItemPedido`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        }
        else {
          console.log(`${rowCount} linha(s) retornadas`);
        }
      }
    );
    
    // Variável do input de Código (trocar)
    var i = 1;

    // Adiciona valores nos inputs.
    request.on("row", columns => {
      columns.forEach(column => {
        valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
        console.log(valInput);
        document.getElementById(`inputB${i}`).value = valInput;
        i++;
      });
    });

    connection.execSql(request);
  }}
