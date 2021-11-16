const { Connection, Request } = require("tedious");


// Status Primeiro da Lista


var btnFila1 = document.querySelector('#btnFila1');
btnFila1.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em fila'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnFila2 = document.querySelector('#btnFila2');
btnFila2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em fila'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnFila3 = document.querySelector('#btnFila3');
btnFila3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em fila'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnFila4 = document.querySelector('#btnFila4');
btnFila4.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em fila'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnFila5 = document.querySelector('#btnFila5');
btnFila5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em fila'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnProduçao1 = document.querySelector('#btnProduçao1');
btnProduçao1.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em produção'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnProduçao2 = document.querySelector('#btnProduçao2');
btnProduçao2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em produção'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnProduçao3 = document.querySelector('#btnProduçao3');
btnProduçao3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em produção'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnProduçao4 = document.querySelector('#btnProduçao4');
btnProduçao4.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em produção'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnProduçao5 = document.querySelector('#btnProduçao5');
btnProduçao5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Em produção'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnConcluido1 = document.querySelector('#btnConcluido1');
btnConcluido1.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Concluída'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnConcluido2 = document.querySelector('#btnConcluido2');
btnConcluido2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Concluída'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnConcluido3 = document.querySelector('#btnConcluido3');
btnConcluido3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Concluída'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnConcluido4 = document.querySelector('#btnConcluido4');
btnConcluido4.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Concluída'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnConcluido5 = document.querySelector('#btnConcluido5');
btnConcluido5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Concluída'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnErro1 = document.querySelector('#btnErro1');
btnErro1.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Com erro'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnErro2 = document.querySelector('#btnErro2');
btnErro2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Com erro'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnErro3 = document.querySelector('#btnErro3');
btnErro3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Com erro'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnErro4 = document.querySelector('#btnErro4');
btnErro4.addEventListener('click', ()=>{
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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Com erro'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



var btnErro5 = document.querySelector('#btnErro5');
btnErro5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);

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

    const request = new Request(
      `UPDATE dbo.Ordem_de_Produção
      SET Situação = 'Com erro'
      Where CodOrdem = \'${cod}\'`,
      (err, rowCount) => {

        if (err) {
          console.error(err.message);
        }

        else {
          console.log(`${rowCount} linha(s) retornadas`);
          window.location.reload();
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



