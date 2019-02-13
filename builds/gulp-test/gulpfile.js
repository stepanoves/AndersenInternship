const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const server = require('gulp-server-livereload');


function scripts() {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./dist/'))
}

function lrserver() {
    return gulp.src('./').pipe(server({
        livereload: true,
        defaultFile: 'index.html',
        directoryListing: false,
        open: false
    }));
}

function watch() {
    gulp.watch('./src/**/*.js', scripts);
}

gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('default', lrserver);
