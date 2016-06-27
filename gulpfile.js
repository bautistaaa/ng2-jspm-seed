var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync');

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('styles', function() {
    var sourceSassFiles = [
        config.allSass
    ];

    gulp.src(sourceSassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('serve', ['compile-ts', 'styles'], function() {

    // need browser to refresh when a css file is change
    // cause: when editing a component style scss file
    gulp.watch('**/*.css').on('change', browserSync.reload);
    gulp.watch([config.allSass], ['styles']);
    gulp.watch([config.allTs], ['compile-ts']);

    browserSync({
        port: 3000,
        files: ['**/*.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
        }
    });
});

gulp.task('default', ['serve']);