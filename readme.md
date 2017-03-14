# Modular Scale

This is a fork from the main [modularscale-sass package](https://github.com/modularscale/modularscale-sass). It fixes the missing 'needs' error, and additionally removed the eyeglass dependency - thereby making it function similar to the Thoughtbot Bourbon NPM package (by either using Eyeglass, or by requiring the module's includePaths).

## Use

### Gulp (without Eyeglass)
* Terminal: `npm install modularscale-sass --save-dev`
* gulpfile.js: pipe in `require("modularscale-sass").includePaths` to your gulp-sass options.
* SCSS: `@import 'modular-scale'`

### Compass

* Terminal: `gem install modular-scale`
* Compass config: `require 'modular-scale'`
* SCSS: `@import 'modular-scale';`

### Eyeglass

* Terminal: `npm install modularscale-sass --save-dev`
* SCSS: `@import 'modular-scale'`

### Webpack with sass-loader

* Terminal: `npm install modularscale-sass --save-dev`
* Webpack config: install and use [sass-loader](https://github.com/jtangelder/sass-loader#apply-via-webpack-config)
* SCSS: `@import '~modularscale-sass/stylesheets/modular-scale';`

### Bower

* Terminal: `bower install modular-scale --save-dev`
* SCSS: `@import '../link_to_component_dir/modular-scale/stylesheets/modular-scale';`

### Vanilla Sass

* [Download the latest zip](https://github.com/Team-Sass/modular-scale/releases/latest)
* Extract into your project
* SCSS: `@import 'modular-scale';`


### License

The MIT License (MIT)

Copyright © 2015 [Scott Kellum](http://www.scottkellum.com/) ([@scottkellum](http://twitter.com/scottkellum)), [Adam Stacoviak](http://adamstacoviak.com/) ([@adamstac](http://twitter.com/adamstac)) and [Mason Wendell](http://thecodingdesigner.com/) ([@codingdesigner](http://twitter.com/codingdesigner))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
