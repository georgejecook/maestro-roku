// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const ProgramBuilder = require('brighterscript').ProgramBuilder;
// eslint-disable-next-line
const DiagnosticSeverity = require('brighterscript').DiagnosticSeverity;
// eslint-disable-next-line
const pkg = require('../package');
// eslint-disable-next-line
const fs = require('fs-extra');

const env = process.argv.slice(2);
let projectPath = path.join(__dirname, '../', `bsconfig-${env}.json`);
console.log(`building "${env}" (${projectPath}`);

function addBuildInfoToManifest(env) {
    let contents = fs.readFileSync('./build/manifest', 'utf8');
    contents += `\nversion_number=${pkg.version}`;
    contents += `\nenv=${env}\n`;
    const versionText = pkg.version;
    const versionParts = versionText.split('.');
    contents += `\nmajor_version=${versionParts[0]}\n`;
    contents += `minor_version=${versionParts[1]}\n`;
    contents += `build_version=${versionParts[2]}\n`;

    fs.writeFileSync('./build/manifest', contents, 'utf8');
}

let programBuilder = new ProgramBuilder();
programBuilder.run({
    project: projectPath
}).then(() => {
    //fail if there are diagnostics
    if (programBuilder.program.getDiagnostics().filter((x) => x.severity === DiagnosticSeverity.Error).length > 0) {
        throw new Error('Encountered error diagnostics');
    } else {
        addBuildInfoToManifest(env);
        console.log('\nBuild is finished');
    }
}).catch(e => {
    process.exit(1);
});

