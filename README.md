# Grunt Sass Tilde Importer

### What you want to do

Import `sass`-stylesheets from a node module inside your application's `scss` file when using
[node-sass](https://github.com/sass/node-sass) via [grunt-sass](https://github.com/sindresorhus/grunt-sass).

### What you would like to write

```scss
@import '~module_name/stylesheet';
```
e.g.
```scss
@import '~bootstrap-sass/assets/stylesheets/_bootstrap';
```
with the [bootstrap sass](https://github.com/twbs/bootstrap-sass) module.

### What you have to do

Install this module with `npm install --save-dev grunt-sass-tilde-importer` and update your `Gruntfile`:

Require the module with 
```js
const tilde_importer = require('grunt-sass-tilde-importer');
```
and add
`importer: tilde_importer` to the options of your [grunt-sass](https://github.com/sindresorhus/grunt-sass)-configuration.

Thanks go to [Dominic Tobias](http://stackoverflow.com/a/37118406/1606867) who suggested this solution.
