const { Connection, Request } = require("tedious");


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


// Query Azure SQL: Login Vendedor.
let user = 'vendedor';

const connection = new Connection(config);

// Tentativa de conexão.
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
    window.location = "login.html?user="+user
  } else {
    queryDatabase();
  }
});

// Conexão do DB.
connection.connect();

// Função de criação de Query.
window.queryDatabase = function queryDatabase() {
  console.log("Lendo dados da tabela...");

  const request = new Request(
    `SELECT DISTINCT Nome,
                     Data_Nasc
     FROM dbo.Vendedor
     Where Nome = \'${inputLoginCod.value}\' And Data_Nasc = \'${inputLoginSenha.value}\'`,
    (err, rowCount) => {
      // Se Erro, recarrega página.
      if (err) {
        console.error(err.message);
        window.location = "login.html?user="+user
      }
      // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
      else {
        console.log(`${rowCount} linha(s) retornadas`);
        if (rowCount != 1) {window.location = "login.html?user="+user}
        else {window.location = '../Telas Vendedor/gerenciarPedidos.html';}
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



