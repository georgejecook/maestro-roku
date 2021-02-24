import * as fsExtra from 'fs-extra';
import * as path from 'path';

function fixRopmIssues(module, file) {

    let filename = path.resolve(path.join('src/source/roku_modules/', module, file + '.d.bs'));
    let text = fsExtra.readFileSync(filename).toString();
    text = text.replace(/(@strict)\n(namespace .*)/gim, (m, m1, m2) => {
        return `${m2}\n${m1}`;
    });
    text = text.replace(/(@usesetfield)\n(namespace .*)/gim, (m, m1, m2) => {
        return `${m2}\n${m1}`;
    });
    text = text.replace(/ mv\.mc\./gim, ` mc.`);
    text = text.replace(/ mx\.mx\./gim, ` mx.`);
    text = text.replace(/ mc\.mc\./gim, ` mc.`);
    text = text.replace(/ mv\.mv\./gim, ` mv.`);
    // text = text.replace(/(class .* extends )(.*)/gim, (m, m1, m2) => {
    //     if (m2.startsWith(module)) {
    //         return `${m1}${m2}`;
    //     } else {
    //         return `${m1}${module}.${m2}`;
    //     }
    // });
    fsExtra.writeFileSync(filename, text, 'utf8');
}

// 