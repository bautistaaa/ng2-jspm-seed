'use strict';

const gulp   = require('gulp');
const del    = require('del');
const config = require('../config')();

gulp.task('clean', function() {
    return del([
        config.folders.dist,
        config.folders.aot,
        config.folders.temp,
        config.folders.rev,
    ]);
});