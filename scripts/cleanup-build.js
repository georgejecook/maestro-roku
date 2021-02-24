/**
 * Moves generated files up into root
 */

var fs = require('fs-extra');
var path = require('path');

//set the cwd to the root of this project
let distDir = path.join(__dirname, '../dist');

let sourceDir = path.join(distDir, 'components/maestro/generated');

try {

  fs.readdirSync(sourceDir).forEach(file => {
    let filePath = path.join(sourceDir, file);
    let text = fs.readFileSync(filePath, 'utf8');
    let r = /\/components\/maestro\/generated/gim;
    text = text.replace(r, '/components')
    fs.writeFileSync(path.join(distDir, 'components', file), text);
  });

  fs.rmdirSync('dist/components/maestro', { recursive: true });
} catch (e) {

}
try {

  fs.rmdirSync('dist/source/maestro', { recursive: true });
} catch (e) {

}
try {

  fs.rmSync('dist/source/bslib.brs');
} catch (e) {

}