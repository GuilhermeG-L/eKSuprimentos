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
      `SELECT TOP 5 c.CodCliente, c.Nome, c.CEP, c.Telefone
      FROM dbo.Cliente c
      Order By Nome`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        }
        else {
          console.log(`${rowCount} linha(s) retornadas`);
        }
      }
    );

    var i = 1;

    // Console.log da query.
    request.on("row", columns => {
      columns.forEach(column => {
        teste = ("%s\t%s", /*column.metadata.colName,*/ column.value);
        console.log(teste);
        document.getElementById(`td${i}`).textContent = teste;
        i++;
      });
    });

    connection.execSql(request);
  }