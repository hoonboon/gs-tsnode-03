"use strict";
var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var tsProject = ts.createProject('tsconfig.json');

// Task: Clean all files in output folder
gulp.task('clean:dist', function() {
    return del(['dist/**/*']);
});

// Task: Build (transpile) all Typescripts into Javascripts in output folder
gulp.task('tsc', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

// default tasks
gulp.task('default', ['clean:dist', 'tsc'], function() {});
