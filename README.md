# A development platform for building roku channels in brighterscript

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
            let r = /\/roku_modules\/undefined/gim;
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
