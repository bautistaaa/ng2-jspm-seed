'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config')();

gulp.task('serve-dist', () => {
    browserSync({
        port: 3000,
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'info',
        reloadDelay: 0,
        server: {
            baseDir: config.webServerFolders.dist,
            index: 'app/aot/index-aot.html',
            middleware: [
                // historyApiFallback(), // not necessary if the app uses hash based routing
                function(req, res, next) {
                    res.setHeader("Access-Control-Allow-Origin", "*"); // add CORS to the response headers (for resources served by BrowserSync)
                    next();
                }
            ]
        }
    });
});
