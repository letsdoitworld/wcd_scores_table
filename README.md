# World Cleanup Day Score table

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Prepare to work with project](#prepare-to-work-with-project)
  - [Install Node.js and NPM](#install-nodejs-and-npm)
    - [Windows](#windows)
    - [Ubuntu](#ubuntu)
  - [Install yarn and create-react-app](#install-yarn-and-create-react-app)
  - [Install project dependencies](#install-project-dependencies)
  - [Add exports from DB](#add-exports-from-db)
- [Development mode](#development-mode)
- [Builds the app for production](#builds-the-app-for-production)
- [Run static](#run-static)

## Prepare to work with project
If you do not have installed Node.JS, NPM, Yarn and Create-react-app, to modify this application or build it production version, you need to prepare your computer. Follow the instructions below for this.

### Install Node.js and NPM
#### Windows
1. Download the Windows installer from the [Nodes.js web site](http://nodejs.org/) .
2. Run the installer (the .msi file you downloaded)
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

#### Ubuntu
1. Run `sudo apt-get install ubuntu-make`
2. Run `sudo umake nodejs`
3. Run `sudo apt-get install npm`

### Install yarn and create-react-app
Run `npm install -g create-react-app yarn` in command prompt

### Install project dependencies
Go to project folder and run `yarn install` in command prompt.

### Add exports from DB
Go to `src\export` folder and add JSON files with data from DB

## Development mode
Go to project folder and run `npm run start`. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Builds the app for production
Run `npm run build` for creates a `build` directory with a production build of your app.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

After completing `npm run build` without errors, use the files in the `build` folder for deployment.

## Run static
Run `npm run static` for start local static server with application.

NB! Do not forget to [add fresh files](#add-exports-from-db) to the `src\export`!
