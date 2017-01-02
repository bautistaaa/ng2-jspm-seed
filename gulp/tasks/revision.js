const gulp           = require('gulp');
const rev            = require('gulp-rev');
const revCollector   = require('gulp-rev-collector');

gulp.task('rev-js', function() {
    return gulp.src("./dist/build.js")
        .pipe(rev())
        .pipe(gulp.dest("dist"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("rev/js"));
});

gulp.task('rev-css', function() {
    return gulp.src("./dist/styles/main.css")
        .pipe(rev())
        .pipe(gulp.dest("dist/styles"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("rev/css"));
});

//replace the reference to the bundled js in index with the new revisioned js
gulp.task('revision', ['rev-js', 'rev-css'], function() {
    return gulp.src(['./rev/**/*.json', './app/aot/index-aot.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist'));
});