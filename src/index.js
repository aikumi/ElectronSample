const fs = require('fs')
const { BrowserWindow, dialog } = require('electron').remote

document.querySelector("#openFile").addEventListener('click', () => {
    openFile();
})

function openFile() {
    const win = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog( win, {
            properties: ['openFile'],
            filters: [
                {name: 'Document',extensions: ['jpg', 'jpeg', 'dng', 'mp4', 'mov']}
            ]
        },
        (fileNames) => {
            if (fileNames) {
                // alert(fileNames[0]);
                readFile(fileNames); 
            }
        }
    )
}

function readFile(path) {
    fs.readFile(path, (error, data) => {
        if (error != null) {
            alert("file open error.");
            return;
        }
        preview.textContent = data.toString();
    })
}
