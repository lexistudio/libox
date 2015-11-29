var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var requirejsOptimize = require('gulp-requirejs-optimize');
var sftp = require('gulp-sftp');
var minifyCss = require('gulp-minify-css');

gulp.task('css-less', function () {
  return gulp.src('./src/css/app.less')
        .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('css', ["css-less"], function() {
  return gulp.src('./www/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./www/css/'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/app.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('./www/js'));
});
 
gulp.task('deploy', function () {
  return gulp.src('./www/**')
        .pipe(sftp({
          host: '',
          user: '',
          pass: '',
          remotePath: '/home/'
        }));
});