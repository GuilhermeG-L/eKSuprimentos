const electron = require('electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const ipcMain=electron.ipcMain;

const path=require('path');
const url=require('url');

let win;

function createWindow(){
    win=new BrowserWindow({
        webPreferences:{
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });
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
