'use strict';

const gulp        = require('gulp');
const config      = require('../config')();
const runSequence = require('run-sequence');
const isWin       = /^win/.test(process.platform);
const exec        = require('child_process').exec;

// helper function for running ngc and tree shaking tasks
const run_proc = (cmd, callBack, options) => {
    let proc = exec(cmd, (err, stdout, stderr) => {
        if (options === undefined) options = {};
        if (options.outFilter !== undefined) stdout = options.outFilter(stdout);
        if (options.errFilter !== undefined) stderr = options.errFilter(stderr);
        process.stdout.write(stdout);
        process.stdout.write(stderr);
        callBack(err);
    });
};

gulp.task('ngc', (cb) => {
    let cmd = 'node_modules/.bin/ngc -p tsconfig-aot.json';
    if (isWin) {
        cmd = '"node_modules/.bin/ngc" -p tsconfig-aot.json';
    }
    return run_proc(cmd, cb);
});

gulp.task('rollup', ['ngc'], cb => {
    let cmd = 'node_modules/.bin/rollup -c rollup.config.js';
    if (isWin) {
        cmd = '"node_modules/.bin/rollup" -c rollup.config.js';
    }

    // Filter known warning messages!
    let errFilter = (messages) => {
        const warningMsg = /The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten\./;
        return messages.split('\n').filter(line => !warningMsg.test(line)).join('\n');
    };
    return run_proc(cmd, cb, { errFilter: errFilter });
});

gulp.task('build-aot', ['rollup']);