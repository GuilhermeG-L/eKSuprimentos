const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

var btnBuscar = document.querySelector('.btnBuscar');
btnBuscar.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('.inputPesquisa').value);

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
      `SELECT DISTINCT CodOrdem
      FROM dbo.Ordem_de_Produção
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          ipc.send('erroselect');
        }
        // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('erroselect');}
          else {window.location = '../Telas Produtor/detalhesDaOrdem.html?cod='+cod;}
        }
      }
    );

    // Console.log da query.
    request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });

    connection.execSql(request);
  }
});