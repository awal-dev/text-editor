const electron  = require('electron')
const fs = require('fs')
const {app, BrowserWindow, ipcMain, dialog} = electron
let win
let filePath = undefined

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

    if(filePath===undefined){
        dialog.showSaveDialog(win, {defaultPath: 'filename.txt'}, (fullpath)=>{
            if(fullpath){
                filePath = fullpath
                writeToFile(text)
            }
        })
    }else{
        writeToFile(text)
    }
    
})

function writeToFile(data){
    fs.writeFile(filePath, data, (err)=>{
        if(err)console.log('there was an error', err)
        console.log('file has been saved')
        win.webContents.send('saved', 'success')
    })
}