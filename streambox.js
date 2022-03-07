const { Transform } = require('stream')
const TransformStream = new Transform();
const fs = require("fs")

function duplicate(filename){
    
    fs.createReadStream(filename).pipe(fs.createWriteStream(`${filename}-copie`))
    console.log(`Le fichier ${filename} a correctement était copié`);
}
    
function transform(filename, re, fn) {
  const readable = fs.createReadStream(filename)
  const writable = fs.createWriteStream('test.copy.txt')

  const TransformStream = new Transform();
  TransformStream._transform = function(chunk, encoding, callback) {
    TransformStream.push(chunk.toString().replace(new RegExp(re, 'g'), fn(re)));
    callback();
  }

  readable.pipe(TransformStream).pipe(writable)
}

module.exports = {
    duplicate: duplicate,
    transform: transform
}