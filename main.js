const electron  = require('electron')
const fs = require('fs')
const {app, BrowserWindow, ipcMain, dialog} = electron
let win

app.on('ready', ()=>{
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
})


ipcMain.on('save', (event, text)=>{
//save the text to a file
    dialog.showSaveDialog(win, {defaultPath: 'filename.txt'}, (fullpath)=>{
        if(fullpath){
            fs.writeFile(fullpath, text, (err)=>{
            if(err)console.log('there was an error', err)
            console.log('file has been saved')
    })
        }
    })
})