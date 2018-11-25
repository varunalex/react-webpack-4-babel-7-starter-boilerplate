
# React-Webpack-4-Babel-7-starter-boilerplate
Startup boilerplate of React16.x + Webpack 4 + Babel 7 (HMR enabled) + ESLint

![React-Webpack-4-Babel-7-boilerplat](https://raw.githubusercontent.com/varunalex/React-Webpack-4-Babel-7-boilerplate/master/dist/images/header.png)

### How to start?
#### Installation
 - Clone or download the repo.
 
   ```git clone https://github.com/varunalex/react-webpack-4-babel-7-starter-boilerplate.git ```
 -  Navigate to cloned folder and run 
 
    `npm install`
#### Usage
 - Start development server - build app continuously (HMR enabled) @ `http://localhost:8080`
 
   `npm run start`
 - Pre-build  - `dist/` - Build app for production
 
   `npm run prebuild`

- Build - Build app once (HMR disabled) and serve @ `http://localhost:3000`

  `npm run build`
  
Basically if we write the word `pre` for a script, in this case `prebuild`, every time we run our command `npm run build` it will first execute `npm run prebuild` and then run the script `npm run build`

#### Notes :
- At `config/webpack.prod.config.js`:  The `optimization.splitChunks` actually takes all of your common code and creates a `vendor.bundle.js` file. Currently this segment is commented. If you want to use `splitChunks` feel free to uncomment the code segment. For more : [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)

- Run prebuild after updating static assets and point source of the `dist/` folder.
```html
 <img alt="header" src="/dist/images/header.png"  className="app-header" />
```
- **Eslint** : You can use your favorite eslint rules set. By default airbnb eslint configurations has installed. 

### What's include?
- [webpack](http://webpack.js.org/)

-  [webpack-cli](https://github.com/webpack/webpack-cli)

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

- [webpack-merge](https://github.com/survivejs/webpack-merge): To divide our configuration into chunks, more on this later

- [webpack-visualizer-plugin](https://github.com/chrisbateman/webpack-visualizer#readme): To see a visual representation of each of our bundle size — how much space they are taking and what are their dependencies.

- [style-loader](https://github.com/webpack-contrib/style-loader): This adds CSS to the DOM by injecting a  `<script />`  tag in the header

-  [sass-loader](https://github.com/webpack-contrib/sass-loader)

-  [node-sass](https://github.com/sass/node-sass)

- [css-loader](https://github.com/webpack-contrib/css-loader)

- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin): This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.

- [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) 

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): This does more then generate an HTML file, it supports on demand .css and .js files automatically added to your HTML files on demand

- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)

- [babel-loader](https://github.com/babel/babel-loader): This is the loader that helps webpack compile .js files

- [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core)

- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) 

- [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)

- [@babel/pollyfill](https://babeljs.io/docs/en/next/babel-polyfill.html): Babel includes a  [polyfill](https://en.wikipedia.org/wiki/Polyfill_%28programming%29)  that includes a custom  [regenerator runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js)  and  [core-js](https://github.com/zloirock/core-js). This will emulate a full ES2015+ environment. This means support for  `async/await`  type of cool syntax sugar.
- [babel-eslint](https://github.com/babel/babel-eslint) : You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).
- [eslint](https://eslint.org/)
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) : React specific linting rules for ESLint.
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) : ESLint plugin with rules that help validate proper imports
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) : Static AST checker for accessibility rules on JSX elements.

### Contribute

Please contribute to the project if you know how to make it better, including this README :)

