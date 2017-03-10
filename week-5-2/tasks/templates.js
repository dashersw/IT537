var angularTemplatecache = require('gulp-angular-templatecache');
var changed = require('gulp-changed');
var del = require('del');
var filter = require('gulp-filter');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var templates = require('./templates');
var touch = require('touch');
var vinylPaths = require('vinyl-paths');
var watch = require('gulp-watch');

module.exports = {
    buildTemplates: buildTemplates,
    watchTemplates: watchTemplates,
    watchStyles: watchStyles
};

function buildTemplates(config) {
    var pug_filter = filter('**/*.pug', {restore: true}),
        destDir = 'dist', stream;

    stream = gulp.src(['src/**/*.pug', 'src/components/**/*.html']).pipe(plumber());

    if (!config.compile) {
        return stream.pipe(pug_filter).
            pipe(changed(destDir, {extension: '.html'})).
            pipe(pug()).
            pipe(pug_filter.restore).
            pipe(gulp.dest(destDir));
    }

    return stream.pipe(pug()).
        pipe(angularTemplatecache({module: 'unu-console', root: '/'})).
        pipe(gulp.dest('dist'));
}

function watchTemplates() {
    var deletedOnly = fileEvents('unlink'),
        addedChangedOnly = fileEvents('add', 'change');

    return watch(['src/**/*.pug']).
        pipe(deletedOnly).
        pipe(rename(function(file) {
            file.dirname = '../../dist/' + file.dirname;
            file.extname = '.html';
            return file;
        })).
        pipe(vinylPaths(del)).
        pipe(deletedOnly.restore).
        pipe(addedChangedOnly).
        pipe(pug()).
        pipe(gulp.dest('dist')).
        pipe(addedChangedOnly.restore).
        on('data', function() {
            touch('dist/update', {force: true});
        });
}

function watchStyles() {
    var deletedOnly = fileEvents('unlink'),
        addedChangedOnly = fileEvents('add', 'change');

    return watch(['src/**/*.css']).
        pipe(deletedOnly).
        pipe(rename(function(file) {
            file.dirname = '../../dist/' + file.dirname;
            return file;
        })).
        pipe(vinylPaths(del)).
        pipe(deletedOnly.restore).
        pipe(addedChangedOnly).
        pipe(gulp.dest('dist')).
        pipe(addedChangedOnly.restore);
}

function fileEvents() {
    var passEvents = [...arguments];

    return filter(function(file) {
        return passEvents.indexOf(file.event) > -1;
    }, {restore: true});
}
