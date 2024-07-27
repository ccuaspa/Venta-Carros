'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass')(require("sass")),
    browserSync = require('browser-sync').create();

// Compilar SASS
function compileSass() {
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Vigilar archivos SASS
function watchSass() {
    gulp.watch('./css/*.scss', compileSass);
}

// Iniciar BrowserSync
function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    cb();
}

// Recargar BrowserSync
function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

// Vigilar archivos HTML y JS para recargar BrowserSync
function watchFiles() {
    gulp.watch('./*.html', browserSyncReload);
    gulp.watch('./js/*.js', browserSyncReload);
}

// Definir las tareas
exports.sass = compileSass;
exports.watch = gulp.parallel(watchSass, watchFiles);
exports.default = gulp.series(browserSyncServe, 'watch');
