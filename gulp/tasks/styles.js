'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const browserSync  = require('browser-sync');
const autoprefixer = require('autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const config       = require('../config')();
const postcss      = require('gulp-postcss');

gulp.task('styles', () => {
    return gulp.src(config.globs.styles.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.stream());
});