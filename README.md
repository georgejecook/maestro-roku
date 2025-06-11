# A development platform for building roku channels in brighterscript


# Notice of Deprecation: Maestro Framework

We’re announcing that Tantawowa Ltd has officially deprecated the Maestro framework.

Over the past months, our team has been building a next-generation, cross-platform TV app framework, designed from the ground up to support platforms like Roku—and go far beyond it. This marks a major leap forward in how we approach TV app development.

What This Means
	•	As of today, Maestro is officially deprecated.
	•	We will no longer maintain the framework or provide updates.
	•	Critical fixes will still be available to existing clients on a case-by-case basis, upon request.

Maestro has been an exciting chapter—it helped make Roku development accessible to a broader range of developers, and we’re proud of what we accomplished with it.

Looking Ahead

Later this year, we’ll be unveiling the new framework that eclipses Maestro in every dimension—from design flexibility to performance and developer experience.

We can’t wait to show you what’s next. Stay tuned over the coming months—exciting things are on the horizon.

—
The Tantawowa Team




[![build](https://img.shields.io/github/actions/workflow/status/georgejecook/maestro-roku/build.yml?logo=github&branch=master)](https://github.com/georgejecook/maestro-roku/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/release/georgejecook/maestro-roku.svg?style=flat-square)](https://github.com/georgejecook/maestro-roku/releases)
[![NPM Version](https://badge.fury.io/js/maestro-roku.svg?style=flat)](https://npmjs.org/package/maestro-roku)

## Why maestro?

### Maestro Makes roku development easier, especially for experienced software engineers from other platforms

I believe that experienced developers from android, ios, c#, web, node, etc, should be able to be productive on a roku app in no more than a week, just as they would on any other platform. So I wrote maestro to make that possible.

Maestro is built to:

- Raise velocity
- Increase productivity
- Reduce learning
- Simply cross-skilling
- Make roku development more fun
- Produce roku apps that can be maintained by non roku developer
- Produce roku apps that can be unit tested easily
- Write code that can be tested and breakpoint debugged, outside of SG views (which are slow as hell, and prone to crashing when breakpoint debugging)

## Quick start

### Sideload without building
- to view a sample, with no need for compiling, sideload the [maestro sideload.zip](maestro=-sideload.zip), onto your roku.


### Building sample apps/playing with maestro frameork

  1. git clone https://github.com/georgejecook/maestro-roku-sample.git
  2. npm install
  3. npm run ropm
  4. open the project in vscode
  5. ensusre you have the brighterscript vscode extension installed
  6. .vscode/.env.sample to .vscode/.env and edit the `ROKU_DEV_TARGET` and `ROKU_DEVPASSWORD` variables, to match your roku device.
  7. launch the `SAMPLE APP` dev target.

note, some sample screens will lose focus when you back out of them. Sorry about that! We will fix that soon - for now, just press home and launch again.

### Interesting notions
In bsconfig.json, you can change the rokuLog settings to control how logging works (this is part of roku-log)
 - use `strip` flag to remove logs
 - use `insertPkgPath` to inject the file details into each log line - if you set the vscode brightscript plugin setting `"brightscript.output.hyperlinkFormat":` to `"FilenameAndFunction"`, then the output will automatically include clickable hyperlinks, which is a very pleasant deubgging experience.

### Sample project

We maintain a simple sample project with sensible examples, which can show you everything you can do with maestro. It is WIP.

**Presently the project may be broken - we will get it fixed up, with a more full example of how to use maestro to build a FULL app in 2024Q2**
- Clone the [sample project](https://github.com/georgejecook/maestro-roku-sample) and follow the instructions there

## Docs

Maestro-roku docs can be found [here](./docs/index.md)

## IMPORTANT!! ropm hook

Because of the way that maestro plugin generates certain files, ropm ~can~ *will* cause errors when you install maestro. You will have to include a script to fix any of these broken files, and run it after you ropm hook.

### files

#### scripts/maestro-ropm-hook.js

```js
/* eslint-disable github/array-foreach */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs-extra');
const path = require('path');

let sourceDir = path.join(__dirname, '..', 'src', 'components', 'roku_modules', 'maestro');

try {
    fs.readdirSync(sourceDir).forEach(file => {
        let filePath = path.join(sourceDir, file);
        if (filePath.endsWith('Task.xml')) {

            let text = fs.readFileSync(filePath, 'utf8');
            let r = /\/roku_modules\/rokucommunity_bslib/gim;
            text = text.replace(r, '/roku_modules/maestro');
            fs.writeFileSync(filePath, text);
        }
    });
} catch (e) {
}

```

#### package.json

Change your ropm task, as follows. in package.json, scripts:

```json
"ropm": "node scripts/maestro-ropm-hook.js ropm copy",
```
