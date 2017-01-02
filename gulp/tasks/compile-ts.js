'use strict';

const gulp       = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const tsc        = require('gulp-typescript');
const tsProject  = tsc.createProject('tsconfig.json');
const config     = require('../config')();

gulp.task('compile-ts', () => {
    let tsResult = gulp
        .src(config.globs.scripts.typescript)
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.folders.temp));
});