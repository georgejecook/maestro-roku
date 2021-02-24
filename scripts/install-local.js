/**
 * Installs a local version of all the rokucommunity dependent packages into this project
 */

import * as fsExtra from 'fs-extra';
import * as path from 'path';
import * as childProcess from 'child_process';
import * as rimraf from 'rimraf';

//set the cwd to the root of this project
let thisProjectRootPath = path.join(__dirname, '..');
process.chdir(thisProjectRootPath);
let packageJson = JSON.parse(fsExtra.readFileSync('package.json').toString());

let packages = {
    'log': 'roku-log'
};

for (let packageName in packages) {
    console.log(`adding '${packageName}' to package.json`);
    packageJson.dependencies[packageName] = `/home/george/hope/open-source/maestro/${packages[packageName]}`;
    rimraf.sync(path.join('node_modules', packageName));
}

let devPackages = {
  'brighterscript': '/home/george/hope/open-source/vsc/brighterscript',
  'roku-log-bsc-plugin': '/home/george/hope/open-source/maestro/roku-log',
  'maestro-roku-bsc-plugin': '/home/george/hope/open-source/maestro/maestro-roku-bsc-plugin',
  'rooibos-roku': '/home/george/hope/open-source/rooibos/bsc-plugin'
};

for (let packageName in devPackages) {
  console.log(`adding dev package: '${packageName}' to package.json`);
  packageJson.devDependencies[packageName] = `${devPackages[packageName]}`;
  rimraf.sync(path.join('node_modules', packageName));
}


console.log('saving package.json changes');
fsExtra.writeFileSync('package.json', JSON.stringify(packageJson, null, 4));
if (fsExtra.existsSync('package-lock.json')) {
  fsExtra.rmSync('package-lock.json');
}
console.log('install packages');
childProcess.execSync('npm i', {
  stdio: 'inherit'
});
console.log('npm run rc');
childProcess.execSync('npm run rc', {
  stdio: 'inherit'
});
