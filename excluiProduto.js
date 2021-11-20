const { Connection, Request } = require("tedious");
const ipc = require('electron').ipcRenderer

// Exclui Primeiro da Lista


var btnExclui1 = document.querySelector('#btnExclui1');
btnExclui1.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td1').textContent);

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

    const request = new Request(
      `Delete From dbo.Produto
      Where CodProduto = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          ipc.send('errodelete');
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('errodelete');}
          else {window.location.reload();}
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


// Exclui Segundo da Lista


var btnExclui2 = document.querySelector('#btnExclui2');
btnExclui2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td4').textContent);

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

    const request = new Request(
      `Delete From dbo.Produto
      Where CodProduto = \'${cod}\'`,
      (err, rowCount) => {
        // Se Erro, recarrega página.
        if (err) {
          ipc.send('errodelete');
        }
        // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('errodelete');}
          else {window.location.reload();}
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


// Exclui Terceiro da Lista


var btnExclui3 = document.querySelector('#btnExclui3');
btnExclui3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td7').textContent);

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

    const request = new Request(
      `Delete From dbo.Produto
      Where CodProduto = \'${cod}\'`,
      (err, rowCount) => {
        // Se Erro, recarrega página.
        if (err) {
          ipc.send('errodelete');
        }
        // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('errodelete');}
          else {window.location.reload();}
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


// Exclui Quarto da Lista


var btnExclui4 = document.querySelector('#btnExclui4');
btnExclui4.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td10').textContent);

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

    const request = new Request(
      `Delete From dbo.Produto
      Where CodProduto = \'${cod}\'`,
      (err, rowCount) => {
        // Se Erro, recarrega página.
        if (err) {
          ipc.send('errodelete');
        }
        // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('errodelete');}
          else {window.location.reload();}
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


// Exclui Quinto da Lista


var btnExclui5 = document.querySelector('#btnExclui5');
btnExclui5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td13').textContent);

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

    const request = new Request(
      `Delete From dbo.Produto
      Where CodProduto = \'${cod}\'`,
      (err, rowCount) => {
        // Se Erro, recarrega página.
        if (err) {
          ipc.send('errodelete');
        }
        // Se Certo e apenas 1 linha retornada, avança. Se Erro, 0, ou mais que 1 retorno, recarrega página.
        else {
          console.log(`${rowCount} linha(s) retornadas`);
          if (rowCount != 1) {ipc.send('errodelete');}
          else {window.location.reload();}
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