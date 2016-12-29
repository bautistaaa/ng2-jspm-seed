'use strict';

const gulp   = require('gulp');
const config = require('../config')();
const tslint = require('gulp-tslint');

gulp.task('ts-lint', () =>
    gulp.src(config.globs.scripts.typescript)
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false
        }))
);