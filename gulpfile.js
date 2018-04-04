var gulp = require('gulp');
var sass = require('gulp-sass');
var injectPartials = require('gulp-inject-partials');
var browserSync = require('browser-sync').create();

//compiling sass
gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream:true
    }))
});

//browsersync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//injecting partials
gulp.task('injectPartials', function () {
  return gulp.src('app/index.html')
    .pipe(injectPartials())
    .pipe(gulp.dest('./app'));
});

//watching
gulp.task('default', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})
