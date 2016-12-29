'use strict';

const gulp        = require('gulp');

gulp.task('preprocess', () => {
    let file = argv.env == 'prod' ? 'env/prod.json' : 'env/dev.json';
    env({ file: file });
    return gulp.src('./index.html')
        .pipe(preprocess())
        .pipe(gulp.dest('./app'));
});