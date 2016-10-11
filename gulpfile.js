var gulp = require('gulp');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var del = require('del');

gulp.task('autoprefixer', function () {
    return gulp.src('./src/css/*.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('moveJS', function () {
  return gulp.src('./src/js/*.js')
             .pipe(gulp.dest('./dist/js'));
});

gulp.task('moveHtml', function () {
  return gulp.src('./src/index.html')
             .pipe(gulp.dest('./dist'));
});

gulp.task('moveImage', function () {
  return gulp.src('./src/images/*')
             .pipe(gulp.dest('./dist/images'));
});

gulp.task('clean:dist', function (cb) {
  del([
      './dist/**/*'
    ], cb);
});

gulp.task('default', ['autoprefixer','moveJS','moveHtml','moveImage']);
