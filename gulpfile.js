

var gulp = require('gulp');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');

gulp.task('server', function () {
    connect.server({
        port: 3000,
        root: './dist',
        livereload: true
    });
});

gulp.task('stylus', function () {
    gulp.src('./src/icon.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch',['server'], function() {
    gulp.watch('./src/**/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);