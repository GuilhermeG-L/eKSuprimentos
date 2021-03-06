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
  
  var btnCadastrar = document.querySelector('.btnCadastrar');
  btnCadastrar.addEventListener('click', ()=>{
    let cod = (document.querySelector('#input1').value);
    let nome = (document.querySelector('#input2').value);
    let cpf = (document.querySelector('#input3').value);
    let telefone = (document.querySelector('#input4').value);
    let logradouro = (document.querySelector('#input5').value);
    let numero = parseInt(document.querySelector('#input6').value);
    let complemento = (document.querySelector('#input7').value);
    let bairro = (document.querySelector('#input8').value);
    let cidade = (document.querySelector('#input9').value);
    let estado = (document.querySelector('#input10').value);
    let cep = (document.querySelector('#input11').value);

    console.log(cod);
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
        `UPDATE dbo.Cliente
        SET CodCliente = \'${cod}\', Nome = \'${nome}\', CPF = \'${cpf}\', Telefone = \'${telefone}\', Logradouro = \'${logradouro}\', Numero = \'${numero}\', Complemento = \'${complemento}\', Bairro = \'${bairro}\', Cidade = \'${cidade}\', Estado = \'${estado}\', CEP = \'${cep}\'
        Where CodCliente = \'${cod}\'`,
        (err, rowCount) => {
          if (err) {
            ipc.send('erroupdate');
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroupdate');}
            else {window.location = '../Telas Vendedor/gerenciarClientes.html'}
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

  var btnCadastrar = document.querySelector('.btnCadastrar');
  btnCadastrar.addEventListener('click', ()=>{
    let codNew = parseInt(document.querySelector('#input1').value);
    let nome = (document.querySelector('#input2').value);
    let cpf = (document.querySelector('#input3').value);
    let telefone = (document.querySelector('#input4').value);
    let logradouro = (document.querySelector('#input5').value);
    let numero = parseInt(document.querySelector('#input6').value);
    let complemento = (document.querySelector('#input7').value);
    let bairro = (document.querySelector('#input8').value);
    let cidade = (document.querySelector('#input9').value);
    let estado = (document.querySelector('#input10').value);
    let cep = (document.querySelector('#input11').value);
  

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
        `Insert Into dbo.Cliente values (\'${codNew}\', \'${cep}\', \'${estado}\', \'${cidade}\', \'${bairro}\', \'${logradouro}\', \'${numero}\', \'${complemento}\', \'${cpf}\', \'${telefone}\', \'${nome}\');`,
        (err, rowCount) => {
          if (err) {
            ipc.send('erroinsert');
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroinsert');}
            else {window.location = '../Telas Vendedor/gerenciarClientes.html'}
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