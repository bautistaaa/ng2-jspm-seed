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

let finalJsBundleName = 'bundle.min.js';

let javascript = {
    src: [
        path.join(folders.app, globs.scripts.javascript)
    ],
    srcDist: path.join(folders.temp, '/core/boot.js'),
    dest: folders.temp,
    destDist: path.join(folders.dist, '/' + finalJsBundleName),
    finalJsBundlePath: finalJsBundleName
};

let typescript = {
    srcAppOnly: [
        path.join(folders.app, globs.scripts.typescript)
    ],
    dest: folders.temp // JavaScript code is emitted in the temp folder
};

let finalCSSBundleName = 'bundle.min.css';

let styles = {
    src: [
        path.join(folders.app, globs.styles.css),
        path.join(folders.app, globs.styles.sass)
    ],
    srcVendorOnly: [
        path.join(folders.app, globs.styles.vendor)
    ],
    dest: folders.temp, // for DEV
    destFiles: path.join(folders.temp, globs.styles.css), // for DEV
    destDist: folders.dist, // for PROD
    finalCssBundleFilename: finalCSSBundleName,
    finalCssBundlePath: finalCSSBundleName
};

let images = {
    src: [
        path.join(folders.app, globs.images)
    ],
    dest: path.join(folders.dist, folders.images)
};

let html = {
    src: [
        path.join(folders.app, globs.html)
    ],
    dest: folders.dist
};

let copy = {
    src: [
        path.join(folders.app, globs.any)
    ],
    dest: folders.dist
};

let minifyCss = { // https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
    keepBreaks: false, // no problem here
    keepSpecialComments: true, // necessary for licensing
    compatibility: false, // no problem here
    aggressiveMerging: false // necessary because it breaks PureCSS
};

module.exports = () => {
    let config = {
        folders: folders,
        globs: globs,
        webServerFolders: webServerFolders
    }

    return config;
};
