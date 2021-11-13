const { Connection, Request } = require("tedious");


// Configuração de conexão DB.
const config = {
  authentication: {
    options: {
      userName: "sqlserver", // update me
      password: "Proj@MSsql15" // update me
    },
    type: "default"
  },
  server: "eksuprimentos-server-1.database.windows.net", // update me
  options: {
    database: "eKSuprimentos", //update me
    encrypt: true
  }
};


// Query Azure SQL: Login Produtor.
let user = 'produtor';

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
function queryDatabase() {
  console.log("Reading rows from the Table...");

  const request = new Request(
    `SELECT DISTINCT Nome,
                     Data_Nasc
     FROM dbo.Produtor
     Where Nome = \'${inputLoginCod.value}\' And Data_Nasc = \'${inputLoginSenha.value}\'`,
    (err, rowCount) => {
      // Se Erro, recarrega página.
      if (err) {
        console.error(err.message);
        window.location = "login.html?user="+user
      }
      // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
      else {
        console.log(`${rowCount} row(s) returned`);
        if (rowCount != 1) {window.location = "login.html?user="+user}
        else {window.location = '../Telas Produtor/gerenciarOrdens.html';}
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