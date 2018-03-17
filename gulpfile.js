'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('js', () =>
    gulp.src('js/custom/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('js/dist'))
);

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/custom/**/*.js', ['js']);
});