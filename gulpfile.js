'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/scss/main.scss')//ruta de entrada
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css')); //ruta de destino, salida
});
 
gulp.task('sass:watch', function () { //watch va compilando cada vez que guardas y lo refleja de inmediato
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass' ]);