'use strict';

const path = require('path');

let extensions = {
    javascript: '.js',
    typescript: '.{ts,tsx}',
    css: '.css',
    sass: '.scss',
    html: '.html',
    sourcemap: '.map',
    png: '.png',
    jpg: '.jpg',
    jpeg: '.jpeg',
    gif: '.gif',
    svg: '.svg'
};

let folders = {
    aot: './aot',
    root: '.',
    dist: './dist',
    temp: './.tmp',
    app: './app',
    rev: './rev',
    styles: './styles',
    images: './images',
    nodeModules: './node_modules',
    jspmPackages: './jspm_packages'
};

// make these globs configurable
let globs = {
    any: '/**/*',
    scripts: {
        javascript: folders.app + '/**/*' + extensions.javascript,
        typescript: folders.app + '/**/*' + extensions.typescript
    },
    styles: {
        css: '.tmp/**/*' + extensions.css,
        sass: folders.app + '/**/*' + extensions.sass,
        vendor: path.join(folders.app, folders.styles, '/vendor' + '{' + extensions.sass + ',' + extensions.css + '}')
    },
    images: path.join(folders.images, '/**/*' + '{' + extensions.png + ',' + extensions.jpg + ',' + extensions.jpeg + ',' + extensions.gif + ',' + extensions.svg + '}'),
    html: '**/*' + extensions.html,
    sourcemaps: '/**/*' + extensions.sourcemap
};

let webServerFolders = {
    dev: [
        // the order IS important. Folders above hav    e precedence
        folders.root, // necessary to have jspm_packages & jspm config file without needing a copy step
        folders.temp, // before app so that ES5 code emitted by TypeScript/Babel takes precedence over ES2015 code that might be written in the app folder
        folders.app
    ],
    dist: [
        folders.root,
        folders.dist,
        folders.app
    ]
};

module.exports = () => {
    let config = {
        folders: folders,
        globs: globs,
        webServerFolders: webServerFolders
    }

    return config;
};
