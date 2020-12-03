# Hack Your Learning Main Website
This repository contains the Hack Your Learning web application (https://hackyourlearning.ca). The application is written in NodeJS and React.
<br />
<br />

## Installation

Further information can be found in the "Dependencies" section below.

1. Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm/blob/master/README.md)
2. Clone repository
```
$ git clone https://github.com/Hack-Your-Learning/hackyourlearning-site.git
```
3. Install NodeJS version
```
$ nvm install
$ nvm use
```
4. Install NodeJS library dependencies
```
$ npm install
```
5. Start the application
```
$ npm start
```
<br />

## Available NPM Commands

There are several NPM commands that can be run to launch parts of the application or tools used in the development process. NPM commands can be run with `npm run {COMMAND}` The commands are outlined below:

- `start` starts the application and makes it available locally at `localhost:3000` in your browser. The page will reload if you make edits. You will also see any lint errors in the console.
- `test` launches the test runner in the interactive watch mode (more info [here](https://facebook.github.io/create-react-app/docs/running-tests))
- `build` runs build sequence to create a package of the application in the `build` folder

<br />

## Dependencies

### Node.js

This project uses [Node.js](https://nodejs.org/en/about/) for its server-side functionality. To simplify the management of Node versions we are using [Node Version Manager](https://github.com/nvm-sh/nvm/blob/master/README.md) (NVM) on Mac and Linux.

Once NVM is installed you can open the project in your terminal and then run `nvm install` to install and switch to the correct version of Node.js while working on the project. After running this command once your terminal should automatically switch to the correct Node.js version when you open the project in your terminal, if it does not you can run `nvm install` again or `nvm use` to switch to the previously installed version of Node.js for the project.

### NPM
The codebase uses package management tools to simplify the process of installing all the required libraries for the project (React, etc.). NPM is packaged with Node.js, and after installing using the instructions in the previous section you can run `npm install` to install the current package configuration for the project.

<br />

## Additional Information
- This application was bootstrapped from the "Create React App" repository. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).
- Code splitting: https://facebook.github.io/create-react-app/docs/code-splitting
- Analyzing the bundle size: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
- Making a progressive web app: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
- Advanced configuration: https://facebook.github.io/create-react-app/docs/advanced-configuration
- Deployment: https://facebook.github.io/create-react-app/docs/deployment
- `npm run build` fails to minify: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
