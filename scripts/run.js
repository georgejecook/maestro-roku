/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const ProgramBuilder = require('brighterscript').ProgramBuilder;
const DiagnosticSeverity = require('brighterscript').DiagnosticSeverity;
const fs = require('fs-extra');

let programBuilder = new ProgramBuilder();
const envName = process.argv.slice(2)[0];
let projectPath = path.join(__dirname, '../', `bsconfig-${envName}.json`);
console.log(`building "${envName}" (${projectPath}`);
let configText = fs.readFileSync(projectPath, 'utf8');

let config = JSON.parse(configText);

programBuilder.run(config).then(() => {
    //fail if there are diagnostics
    if (programBuilder.program.getDiagnostics().filter((x) => x.severity === DiagnosticSeverity.Error).length > 0) {
        throw new Error('Encountered error diagnostics');
    } else {
        console.log('\nBuild is finished');
    }
}).catch(e => {
    console.log('error', e.message);
    process.exit(1);
});