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

    fs.rmSync('dist/components/maestro', { recursive: true, force: true });
} catch (e) {
}

//fix for annoying ropm issue
sourceDir = path.join(distDir, 'source');
fixBslib(sourceDir);

try {

    fs.readdirSync(sourceDir).forEach(file => {
        let filePath = path.join(sourceDir, file);
        let text = fs.readFileSync(filePath, 'utf8');
        let r = / bslib/gim;
        text = text.replace(r, ' rokucommunity_bslib')
        fs.writeFileSync(path.join(distDir, 'source', file), text);
    });

    fs.rmSync('dist/components/maestro', { recursive: true, force: true });
} catch (e) {
}

try {

    fs.rmSync('dist/source/maestro', { recursive: true, force: true });
} catch (e) {
}

try {

    fs.rmSync('dist/source/_maestro', { recursive: true, force: true });
} catch (e) {
}

try {

    fs.rmSync('dist/source/bslib.brs');
} catch (e) {

}

function fixBslib(sourceDir) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        fs.readdirSync(sourceDir).forEach((file) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const filePath = path.join(sourceDir, file);
            if (fs.statSync(filePath).isDirectory()) {
                fixBslib(filePath);
            } else if (filePath.endsWith('.brs')) {
                let text = fs.readFileSync(filePath, 'utf8');
                let r = /([ |\{\[\(])bslib/gim;
                text = text.replace(r, '$1rokucommunity_bslib')
                fs.writeFileSync(filePath, text);
            }
        });
    } catch (e) { }
}