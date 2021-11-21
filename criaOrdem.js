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

function converterData(data){
  var arrData = data.split('-')
  var [ano, mes, dia] = arrData
  return `${ano}${mes}${dia}`
}

if (cod > 0) {
  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
    setTimeout(fo1, 200);
    function fo1() {window.location = '../Telas Adm/gerenciarPedidosAdm.html';}})


}
else {

  var btnConcluir = document.querySelector('.btnConcluir');
  btnConcluir.addEventListener('click', ()=>{
    setTimeout(fo2, 200);
    function fo2() {
    let codNew = parseInt(document.querySelector('#input1').value);
    let codcliente = parseInt(document.querySelector('#input2').value);
    let codvendedor = parseInt(document.querySelector('#input3').value);
    let dataentrega = (document.querySelector('#input5').value);
    let datarealizacao = (document.querySelector('#input4').value);
    let preçototal = parseFloat(document.querySelector('.precoTotal').value);
    let codprodutor = Math.floor((Math.random() * 2) + 1);
    let status = 'Em fila';

    console.log(codcliente);
    console.log(codvendedor);
    console.log(dataentrega);
    console.log(datarealizacao);
    console.log(preçototal);
    console.log(codprodutor);


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
        `Insert Into dbo.Ordem_de_Produção values (\'${codNew}\', \'${codprodutor}\', \'${codNew}\', \'${codcliente}\', \'${codvendedor}\', \'${status}\');`,
        (err, rowCount) => {
          if (err) {
            ipc.send('erroupdate');
          }
          else {
            console.log(`${rowCount} linha(s) retornadas`);
            if (rowCount != 1) {ipc.send('erroinsert');}
            else {window.location = '../Telas Adm/gerenciarPedidosAdm.html';}
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
    }}})}

      
    console.log('Data Entrega: ' + dataentrega)
    console.log('Data Realização: ' + datarealizacao)