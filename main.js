const electron  = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', ()=>{
    let win = new BrowserWindow({})
    win.loadFile('index.html')
})