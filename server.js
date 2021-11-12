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




// Query Azure SQL: Login Vendedor.

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

  // Read all rows from table
  const request = new Request(
    `SELECT DISTINCT Nome,
                     Data_Nasc
     FROM dbo.Vendedor
     Where Nome = 'Maria da Silva' And Data_Nasc = '19970912'`,
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






/*

// Query Azure SQL: Login Produtor.

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

  // Read all rows from table
  const request = new Request(
    `SELECT DISTINCT Nome,
                     Data_Nasc
     FROM dbo.Vendedor
     Where Nome = 'André Souza' And Data_Nasc = '19950321'`,
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

*/