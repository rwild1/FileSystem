/* Fs Operations With Yargs */
const fs = require('fs');
const yargs = require('yargs');

let fileArray = [];
let filename = yargs.argv.filename;
console.log('Filename:', filename);

// Asynchronously reads the entire contents of the fileNames.txt file.
fs.readFile('fileNames.txt', (err, data) => {
    // If runtime errors occur, display error on the console.
    if (err) {
        console.error(err);
    }

    // Parses the string.
    if (data) {
        fileArray = JSON.parse(data);
        console.log('File exists results:', fileArray.includes(filename));

        // If data exists in the file (fileNames.txt), prompt user to enter a new filename.
        // Else, append filename value to the array (fileArray).
        if (fileArray.includes(filename)) {
            console.error('File already exists');
            console.log('Please enter a new file');
        } else {
            fileArray.push(filename);
            console.log('fileArray', fileArray);

            // Write array of filenames in 'fileNames.txt'.
            fs.writeFile('fileNames.txt', JSON.stringify(fileArray), (err) => {
                if (err) {
                    console.error(err);
                }
            });

            // If file does not exist, create a new file with 'You are awesome' as default data.
            fs.writeFile(filename, 'You are awesome', (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Data successfully written');
                }
            });
        }
    }
});