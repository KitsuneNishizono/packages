'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/scss/main.scss')//ruta de entrada
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css')); //ruta de destino, salida
});
 
gulp.task('sass:watch', function () { //watch va compilando cada vez que guardas y lo refleja de inmediato
  gulp.watch('./app/scss/main.scss', ['sass']); //cada vez que cambie el archivo .scss, activa sass (es decir, compila y traduce). Eso es lo que está diciendo.
});

gulp.task('default', [ "sass", "sass:watch"]);//ejecutar sass y, en cuanto termine, ejecutewatch (se queda escuchando a la espera de cambios)