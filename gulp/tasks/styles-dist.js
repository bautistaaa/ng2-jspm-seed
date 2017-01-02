'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const cleanCSS     = require('gulp-clean-css');
const config       = require('../config')();
const postcss      = require('gulp-postcss');

gulp.task('styles-dist', () => {
    return gulp.src([config.globs.styles.sass])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});
