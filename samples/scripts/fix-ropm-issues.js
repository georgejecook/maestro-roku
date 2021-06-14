import * as fsExtra from 'fs-extra';
import * as path from 'path';
import * as glob from 'glob';

/**
 * these few workarounds exist to a couple of ropm bugs, which are waiting fixes.
 */

glob('src/components/roku_modules/maestro/**/*.xml', (er, files) => {
    for (let f of files) {
        let text = fsExtra.readFileSync(f).toString();
        text = text.replace('pkg:/source/roku_modules/maestro/bslib.brs', 'pkg:/source/bslib.brs');
        fsExtra.writeFileSync(f, text, 'utf8');
    }
});
glob('src/components/roku_modules/maestro/**/*.brs', (er, files) => {
    for (let f of files) {
        let text = fsExtra.readFileSync(f).toString();
        text = text.replace(/maestro_/gim, '');
        fsExtra.writeFileSync(f, text, 'utf8');
    }
});
glob('src/source/roku_modules/maestro/**/*.brs', (er, files) => {
    for (let f of files) {
        let text = fsExtra.readFileSync(f).toString();
        text = text.replace(/maestro_/gim, '');
        fsExtra.writeFileSync(f, text, 'utf8');
    }
});
