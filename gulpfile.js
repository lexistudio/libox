var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var requirejsOptimize = require('gulp-requirejs-optimize');
 
gulp.task('css', function () {
  return gulp.src('./src/css/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/app.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('./www/js'));
});