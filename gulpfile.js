'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const tsc = require('gulp-typescript');
const tsProject = tsc.createProject('tsconfig.json');
const config = require('./gulp.config')();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const jshint = require('gulp-jshint');
const browserSync = require('browser-sync');
const tslint = require('gulp-tslint');
const htmlreplace = require('gulp-html-replace');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const requireDir = require('require-dir')('./gulp/tasks');

// import historyApiFallback from "connect-history-api-fallback"; // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204

gulp.task('compile-ts', () => {
    let sourceTsFiles = [
        config.allTs
    ];

    let tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('ts-lint', () =>
    gulp.src(config.allTs)
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false
        }))
);

gulp.task('js-hint', () => {
    return gulp.src(config.allTs)
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('preprocess-index', () => {
    let file = argv.env == 'prod' ? 'env/prod.json' : argv.env == 'dev' ? 'env/dev.json' : 'env/fe.json';
    env({ file: file });
    return gulp.src('./index.html')
        .pipe(preprocess())
        .pipe(gulp.dest('./app'));
});

gulp.task('html-replace', function() {
    gulp.src('./index.html')
        .pipe(htmlreplace({
            'css': 'styles.min.css',
            'js': 'js/bundle.min.js'
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', () => {
    return runSequence(
        'clean',
        ['ts-lint', 'js-hint','compile-ts', 'styles'],
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