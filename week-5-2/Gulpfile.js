var changed = require('gulp-changed');
var concat = require('gulp-concat');
var del = require('del');
var filenames = require('gulp-filenames');
var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');
// var rev = require('gulp-rev');
// var revNapkin = require('gulp-rev-napkin');
// var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var serverLivereload = require('gulp-server-livereload');
var urlAdjuster = require('gulp-css-url-adjuster');

var templates = require('./tasks/templates');
var compileJs = require('./tasks/compilejs');


gulp.task('default', function(callback) {
    runSequence('clean:before',
        ['compile-dev', 'lib-dev', 'templates-dev', 'css-dev'],
        ['static'],
        ['process-html-dev'],
        'clean:after',
        ['watch-templates', 'watch-css', 'serve'],
        callback);
});

gulp.task('watch-templates', function() {
    return templates.watchTemplates();
});

gulp.task('watch-css', function() {
    return templates.watchStyles();
});

gulp.task('templates-dev', function() {
    return templates.buildTemplates({});
});

gulp.task('compile-dev', function(cb) {
    compileJs({watch: true}, cb);
});

gulp.task('lib-dev', function() {
    var bowerMain = require('bower-main'),
        bowerMainJavaScriptFiles = bowerMain('js', 'min.js', '');

    return gulp.src(bowerMainJavaScriptFiles.normal).
        pipe(concat('lib.js')).
        pipe(gulp.dest('dist'));
});

gulp.task('css-dev', function() {
    return gulp.src(['src/**/*.css']).
        pipe(changed('dist')).
        pipe(urlAdjuster({ prepend: '/' })).
        pipe(gulp.dest('dist'));
});

// gulp.task('revision', function() {
//     return gulp.src(['dist/index.js', 'dist/style.css']).
//         pipe(rev()).
//         pipe(gulp.dest('dist')).
//         pipe(revNapkin()).
//         pipe(rev.manifest()).
//         pipe(gulp.dest(''));
// });

gulp.task('get-css', function() {
    return gulp.src(['src/**/reset.css', 'src/**/base.css', 'src/**/*.css']).
        pipe(filenames('css'));
});

gulp.task('static', function() {
    return gulp.src('src/static/**/*.*')
        .pipe(gulp.dest('dist/static'));
});

gulp.task('process-html-dev', ['get-css'], function() {
    // var manifest = gulp.src('./rev-manifest.json');
    var css = filenames.get('css').map(f => f);

    return gulp.src('src/index.html').
        pipe(htmlReplace({
            styles: css,
            scripts: ['/lib.js', '/index.js']
        })).
        pipe(gulp.dest('dist')).
        // pipe(revReplace({manifest: manifest})).
        pipe(htmlmin({collapseWhitespace: false})).
        pipe(gulp.dest('dist'));
});

gulp.task('clean:before', function() {
    del('dist/*');
});

gulp.task('clean:after', function() {
    del('rev-manifest.json');
});

gulp.task('serve', function() {
    return gulp.src('dist').pipe(serverLivereload({
        port: 42000,
        fallback: 'index.html',
        livereload: {
            enable: true,
            filter: function(filePath, cb) {
                cb(/dist\/update|css$|js$/.test(filePath));
            }
        }
        // open: true
    }));
});
