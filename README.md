# React-Webpack-4-Babel-7-boilerplate
Startup boilerplate of React16.3 + Webpack 4 + Babel 7 (HMR enabled)

![React-Webpack-4-Babel-7-boilerplat](https://raw.githubusercontent.com/varunalex/React-Webpack-4-Babel-7-boilerplate/master/dist/images/header.png)

### How to start?
#### Installation
 - Clone or download the repo.
 
   ```git clone https://github.com/varunalex/react-webpack-4-babel-7-starter-boilerplate.git ```
 -  Navigate to cloned folder and run 
 
    `npm install`
#### Usage
 - Start development server - build app continuously (HMR enabled)
 
   `npm run start`
 - Build  - `dist/`
 
   `npm start prebuild`

#### Note:
- At `config/webpack.prod.config.js`:  The `optimization.splitChunks` actually takes all of your common code and creates a `vendor.bundle.js` file. Currently this segment is commented. I you want to use `splitChunks` feel free to uncomment the code segment. For more : [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)
- Run prebuild after updating static assets and point source of the `dist/` folder.
``` <img  alt="header"  src="/dist/images/header.png"  className="app-header"  /> ```

### What's include?
- [webpack](http://webpack.js.org/): We need Webpack to bundle our code.

-  [webpack-cli](https://github.com/webpack/webpack-cli): We will be using some CLI features of Webpack to make our lives easier while writing some scripts.

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server): I will create a server using the webpack-dev-server package. This is only meant to be used in the development environment, and not for production. This means while developing and working on my code, I don’t need a separate server like NodeJS to setup manually.

- [webpack-merge](https://github.com/survivejs/webpack-merge): To divide our configuration into chunks, more on this later

- [webpack-visualizer-plugin](https://github.com/chrisbateman/webpack-visualizer#readme): To see a visual representation of each of our bundle size — how much space they are taking and what are their dependencies.

- [style-loader](https://github.com/webpack-contrib/style-loader): This adds CSS to the DOM by injecting a  `<script />`  tag in the header

-  [sass-loader](https://github.com/webpack-contrib/sass-loader): For SCSS support

-  [node-sass](https://github.com/sass/node-sass): A dependency for sass-loader

- [css-loader](https://github.com/webpack-contrib/css-loader): To convert our .scss files into .css

- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin): This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.

- [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin): To minify JavaScript code for production

- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)  To minify CSS code for production

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): This does more then generate an HTML file, it supports on demand .css and .js files automatically added to your HTML files on demand

- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/): Copies files/folders to your build folder.

- [babel-loader](https://github.com/babel/babel-loader): This is the loader that helps webpack compile .js files

- [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core): Babel core compiler, this is a dependency that lets you use babel-loader

- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)  Babel preset for React code

- [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env): Babel preset that allows you to use the latest JavaScript

- [@babel/pollyfill](https://babeljs.io/docs/en/next/babel-polyfill.html): Babel includes a  [polyfill](https://en.wikipedia.org/wiki/Polyfill_%28programming%29)  that includes a custom  [regenerator runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js)  and  [core-js](https://github.com/zloirock/core-js). This will emulate a full ES2015+ environment. This means support for  `async/await`  type of cool syntax sug

### Contribute

Please contribute to the project if you know how to make it better, including this README :)

