var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    del = require('del'),
    imageResize = require('gulp-image-resize'),
    imagemin = require('gulp-imagemin'),
    mozjpeg = require('imagemin-mozjpeg'),
    inlinesource = require('gulp-inline-source'),
    htmlmin = require('gulp-htmlmin'),
    gulpSequence = require('gulp-sequence'),
    rename = require('gulp-rename');

// Paths to various files
var paths = {
    scripts: ['src/js/jquery-3.1.1.min.js', 'src/js/bootstrap.min.js', 'src/js/menu.js'],
    styles: ['src/css/*.css'],
    images: ['src/images/*'],
    content: ['src/*.html']
};

// Concats & minifies js files and outputs them to dist/js/app.js
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concatify('app.js'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'));
});

// Minifies js files
gulp.task('minifyScripts', function() {
    return gulp.src(paths.scripts)
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

// Postprocess & minifies CSS files
gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
        // .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

// Minify images
gulp.task('minifyImages', function() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});


// 移动HTML文件
gulp.task('minifyHTML', function() {
  return gulp.src(paths.content)
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
});

// 将CSS文件内联到HTML中，并压缩HTML
gulp.task('inlinesource', function() {
  return gulp.src('dist/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('content', gulpSequence('minifyHTML', 'inlinesource'));

gulp.task('default', ['styles', 'scripts']);

//监听JS CSS HTML文件的改动，并执行minifyScripts styles content任务
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['minifyScripts']);
  gulp.watch(paths.styles, function (event) {
    gulpSequence('styles', 'inlinesource')(function (err) {
      if (err) console.log(err);
    });
  });
  gulp.watch(paths.images, ['minifyImages']);
  gulp.watch(paths.contents, ['contents']);
});