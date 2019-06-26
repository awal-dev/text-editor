const electron  = require('electron')
const {app, BrowserWindow, ipcMain} = electron

app.on('ready', ()=>{
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
})


ipcMain.on('save', (event, text)=>{
//save the text to a file
console.log(text)
})