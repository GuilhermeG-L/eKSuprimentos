const { Connection, Request } = require("tedious");

// Create connection to database
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

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  const request = new Request(
    `SELECT DISTINCT Nome,
                     Data_Nasc
     FROM dbo.Produtor
     Where Nome = \'${inputLoginCod.value}\' And Data_Nasc = \'${inputLoginSenha.value}\'`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}