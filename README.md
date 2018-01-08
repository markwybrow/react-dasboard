This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

If you wish to recreate the environment - please build a react app with create-react-app
```
npm i -g create-react-app
```
then generate an app eg. test
```
create-react-app test
```
once created - copy all of my source-code from "code" directory into root & run ```npm i```

### Basic run of SPA without installing development environment
To see running SPA without installation - simply download the build folder 
while in the build folder 

```npm i
npm start
```
go to browser localhost:3001

## Table of Contents
- [Summary](#summary)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
 
## Summary 
### Code base and running Application with complete environment installation

This application was scaffolded by using ``` create-react-app ```


- To run the application in a server and browser: 
    - I have included the build files in ./build ... cd into build folder and run commands listed below
   
 if you do not have a local server 
    - please open a terminal run ```npm install```
     - Run the local server  with command ```npm start```
       - when started:  open browser on localhost:3001

- source code can be viewed in ./src and ./public


## Folder Structure for Development & Src files

This project should look like this:

```
code/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    index.html
  src/
        components/
            App.js
            Card.js
            CardDetails.js
            Header.js

            UI/
                Auxiliary.js
                Modal.js
                Page-Header.js

        css/
            cards.css
            main.css
            modal.css
            styles.css
        js/
            Utils.js
    index.js
    sample.json
  
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

Only files inside `public` can be used from `public/index.html`.<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. If port 3001 is used - you will be prompted to increase by integer<br>
Open [http://localhost:3000](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
