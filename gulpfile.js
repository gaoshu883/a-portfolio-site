var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    del = require('del'),
    rename = require('gulp-rename');

//Paths to various files
var paths = {
    scripts: ['js/jquery-3.1.1.min.js', 'js/bootstrap.min.js', 'js/menu.js'],
    styles: ['css/*.css']
};

//Concats & minifies js files and outputs them to dist/js/app.js
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concatify('app.js'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'));
});

//Postprocess & minifies CSS files
gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
        .pipe(rename({ suffix: '.min' }))
        // .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['styles', 'scripts']);
