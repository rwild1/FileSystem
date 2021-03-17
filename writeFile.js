const fs = require('fs');

// Create a constant (data) that stores a new Uint8Array oject that allocates a new Buffer using an array of bytes.
const data = new Uint8Array(Buffer.from([]));

// If the file does not exist, a new file (fileNams.txt) will be created.
fs.writeFile('fileNames.txt', data, (err) => {
    if (err) {
        console.error(err);
    }

    console.log('The file has been saved!');
});