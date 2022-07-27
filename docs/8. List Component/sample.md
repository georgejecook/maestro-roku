---
priority: 1
title: Sample
---

## Running the maestro-roku list sample app

  - `git clone git@github.com:georgejecook/maestro-roku.git`
  - `npm i`
  - `npm run ropm`
  - open this project in vscode
  - set your ip address and password in `.env`
  - run the run target `List Sample App`

## Info

- See the file `ListScreen.bs` to tweak the behavior of the lists.
- Edit `src-ml-test-app/components/AppController.bs`'s `onFirstShow` function to switch between regular rowlist and maestro-roku list, to see the difference in the experience/performance
