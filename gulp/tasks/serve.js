'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config')();
let reload = browserSync.reload;

gulp.task('serve', () => {
    browserSync({
        port: 3000,
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'info',
        reloadDelay: 0,
        server: {
            baseDir: config.webServerFolders.dev,
            index: 'index.html',
            middleware: [
                // historyApiFallback(), // not necessary if the app uses hash based routing
                function(req, res, next) {
                    res.setHeader("Access-Control-Allow-Origin", "*"); // add CORS to the response headers (for resources served by BrowserSync)
                    next();
                }
            ]
        }
    });

    // need browser to refresh when a css file is changed
    // cause: when editing an ng2 component style scss file
    gulp.watch(config.globs.styles.css).on('change', reload);
    gulp.watch(config.globs.styles.sass, ['styles']);
    gulp.watch(config.globs.scripts.typescript, ['ts-watch']);
    gulp.watch(config.globs.html).on('change', reload);
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('ts-watch', ['compile-ts'], () => {
    reload();
});
