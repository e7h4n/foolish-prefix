#!/usr/bin/env node
'use strict';

var gulp = require('gulp');
var prefix = require('gulp-prefix');
var yargs = require('yargs');

gulp.task('build', function () {
    return gulp.src('dist/index.html')
        .pipe(prefix(yargs.argv.prefix))
        .pipe(gulp.dest('./dist/'));
});

gulp.start('build');
