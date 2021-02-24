const path = require('path');
const ProgramBuilder = require('brighterscript').ProgramBuilder;

let programBuilder = new ProgramBuilder();
programBuilder.run({
  project: path.join(__dirname, '../', 'bsconfig-dist.json')
}).catch(e => {
  console.error(e);
});