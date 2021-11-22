const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

function pegarNome(parameter) {  
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


var nomeCli = pegarNome("nome")
nomeCli = decodeURIComponent(nomeCli)
console.log(nomeCli)

if (nomeCli != 'undefined') {

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

  // Query Azure SQL: Busca Cliente.
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
      `SELECT DISTINCT CodCliente, Nome, CPF, Telefone, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, CEP
      FROM dbo.Cliente
      Where Nome = \'${nomeCli}\'`,
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
        console.log(valInput);
        document.getElementById(`input${i}`).value = valInput;
        i++;
      });
    });

    connection.execSql(request);
  }}


// PRA CASO CLIQUE EM ADICIONAR CLIENTE (Não tem cod):


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

  // Query Azure SQL: Busca Cliente.
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
      `SELECT DISTINCT max(CodCliente+1)
      FROM dbo.Cliente`,
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
        document.getElementById(`input${i}`).value = valInput;
        i++;
      });
    });

    connection.execSql(request);
  }}