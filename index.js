var fs = require('fs');
var colors = require('colors');

var path = './';


fs.readdir(path, function (err, files) {
    console.log(files);
    fs.writeFile('nowy.txt', files, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});