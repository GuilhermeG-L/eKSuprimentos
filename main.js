const electron = require('electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const ipcMain=electron.ipcMain;

const path=require('path');
const url=require('url');

const dialog = electron.dialog

let win;

function createWindow(){
    win=new BrowserWindow({
        minWidth: 1280,
        minHeight: 720,
        icon: __dirname + './imgs/icon.png',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });
    win.setMenuBarVisibility(false);
    win.maximize();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('close', function(){
        win=null
    });
}

app.on('ready', createWindow);

ipcMain.on('erroconexao', function (event) {
    dialog.showErrorBox ('Não foi possível conectar ao Banco de Dados! ','Verifique sua conexão de internet e tente novamente.')
})

ipcMain.on('errologin', function (event) {
    dialog.showErrorBox ('Login inválido! ','Verifique os dados inseridos e tente novamente.')
})

ipcMain.on('erroselect', function (event) {
    dialog.showErrorBox ('Não foi possível localizar os dados! ','Verifique se os dados existem e estão corretos.')
})

ipcMain.on('erroinsert', function (event) {
    dialog.showErrorBox ('Não foi possível inserir os dados! ','Verifique se os dados estão corretos e se todos os campos necessários foram preenchidos.')
})

ipcMain.on('erroupdate', function (event) {
    dialog.showErrorBox ('Não foi possível atualizar os dados! ','Verifique se os dados estão corretos e se todos os campos necessários foram preenchidos.')
})

ipcMain.on('errodelete', function (event) {
    dialog.showErrorBox ('Não foi possível deletar os dados! ','Verifique se os dados existem e estão corretos.')
})





/*
const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
    
  }) */
