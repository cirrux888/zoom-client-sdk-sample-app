# Getting Started with Create React App

This project was created to demonstrate the issue between Material UI makeStyles and Zoom.

## Reproducing the Issue

In order to reproduce the issue, you will need to uncomment some of the styles in the makeStyles block in App.js.

Then, create a build:

### `npm run build`

And then run the dev server:

### `npx serve`

Presumably the issue is caused by the use of makeStyles injecting additional styles that causes the issues with Zoom's styles.
