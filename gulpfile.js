'use strict';

var gulp = require('gulp');
var veriumcoreTasks = require('veriumcore-build');

veriumcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
