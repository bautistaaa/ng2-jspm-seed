'use strict';

const gulp        = require('gulp');
const runSequence = require('run-sequence');
const requireDir  = require('require-dir')('./gulp/tasks');

gulp.task('default', () => {
    return runSequence(
        'clean',
        ['ts-lint', 'compile-ts', 'styles'],
        'serve'
    );
});

gulp.task('serve:prod', () => {
    return runSequence(
        'clean',
        ['ts-lint', 'styles-dist'],
        'build-aot',
        'serve-dist'
    );
});