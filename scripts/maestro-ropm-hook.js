/* eslint-disable github/array-foreach */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs-extra');
const path = require('path');

function fixPackagePath(sourceDir) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        fs.readdirSync(sourceDir).forEach((file) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const filePath = path.join(sourceDir, file);
            if (fs.statSync(filePath).isDirectory()) {
                fixPackagePath(filePath);
            } else if (filePath.endsWith('.xml') || filePath.endsWith('.brs') || filePath.endsWith('.d.bs')) {
                let text = fs.readFileSync(filePath, 'utf8');
                let r = /\/roku_modules\/undefined\/bslib/gim;
                text = text.replace(
                    r,
                    '/roku_modules/rokucommunity_bslib/bslib'
                );
                r = /\/roku_modules\/undefined/gim;
                text = text.replace(r, '/roku_modules/maestro');

                fs.writeFileSync(filePath, text);
            }
        });
    } catch (e) { }
}

let sourceDir = path.join(__dirname, '..', 'src', 'components', 'roku_modules');
fixPackagePath(sourceDir);
