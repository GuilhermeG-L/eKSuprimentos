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
      `SELECT DISTINCT p.CodPedido, p.CodCliente, c.Nome, p.CodVendedor, v.Nome, p.Data_realização, p.Data_Entrega
      FROM dbo.Pedido as p
      Inner Join dbo.Cliente as c ON p.CodCliente = c.CodCliente
      Inner Join dbo.Vendedor as v ON p.CodVendedor = v.CodVendedor
      Where p.CodPedido = \'${cod}\'`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        }
        else {
          console.log(`${rowCount} linha(s) retornadas`);
        }
      }
    );
    
      function converteData(stringData){
        // Declaração das variáveis
        var arrDados = stringData.split(' ')
        var stringResultado = ''
        var mes, dia, ano
        var [mesString, diaString, anoString] = [arrDados[1], arrDados[2], arrDados[3]]

        // Definição e Conversão do Mês
        switch(mesString){
          case 'Jan':
            mes = '01'
            break;
          case 'Feb':
            mes = '02'
            break;
          case 'Mar':
            mes = '03'
            break;
          case 'Apr':
            mes = '04'
            break;
          case 'May':
            mes = '05'
            break;
          case 'Jun':
            mes = '06'
            break;
          case 'Jul':
            mes = '07'
            break;
          case 'Aug':
            mes = '08'
            break;
          case 'Sep':
            mes = '09'
            break;
          case 'Oct':
            mes = '10'
            break;
          case 'Nov':
            mes = '11'
            break;
          case 'Dec':
            mes = '12'
            break;
        }


        var diaNum = parseInt(diaString)

        //Adicionando um dia
        ano = parseInt(anoString)
        var bissexto =  ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)))
        if(mes == '02' && bissexto){
          if(diaNum == 29){
            diaNum = 1
            mes = '03'
          }else{
            diaNum += 1
          }
        }else{
          if(mes == '02'){
            if(diaNum == 28){
              diaNum = 1
              mes = '03'
            }else{
              diaNum+=1
            }
          }else if(mes == '01' || mes == '03' || mes == '05' || mes == '07' || mes == '08' || mes == '10' || mes == '12'){ 
              if(diaNum == 31){
                if(mes == '12'){
                  anoString = (parseInt(anoString) + 1).toString()
                  mes = '01'
                  diaNum = 1
                }else{
                  mes = (parseInt(mes) + 1).toString()
                  diaNum = 1
                }
              }else{
                diaNum += 1
              }
          }else{
            if(diaNum == 30){
              mes = (parseInt(mes) + 1).toString()
              diaNum = 1
            }else{
              diaNum += 1
            }
          }
        }

        // Definição e Ajuste do dia
        if(diaNum < 10){
          dia = `0${diaNum}`
        }else{
          dia = diaNum.toString()
        }

        // Montagem e retorno do Resultado
        stringResultado = `${anoString}-${mes}-${dia}`
        return stringResultado
      }

    // Variável do primeiro input.
    var i = 1;

    // Adiciona valores nos inputs.
    request.on("row", columns => {
      columns.forEach(column => {
        valInput = ("%s\t%s", /*column.metadata.colName,*/ column.value);
        if(typeof valInput == 'object'){
          valInput = converteData(valInput.toString())
        }
        console.log(`
        ValInput: ${valInput}
        Tipo ValInput: ${typeof valInput}
        `);
        document.getElementById(`input${i}`).value = valInput;
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
    // Adiciona +1 no código mais alto criado.
    const request = new Request(
      `SELECT DISTINCT max(CodPedido+1)
      FROM dbo.Pedido`,
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
