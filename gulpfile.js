// *** dependencies *** //

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('jshint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('style', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', [
    'jshint',
    'style'
  ]);
});

// *** defailt task *** //
gulp.task('default', ['jshint', 'style', 'watch']);
