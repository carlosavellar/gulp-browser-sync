var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('styles', function() {
    gulp.src(['sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('   sass/css/'));
});
gulp.task('watch', function() {
    gulp.watch("sass/*.scss", ["styles"]);
});
gulp.task('sass-watch', ['styles']);
gulp.task("browser-sync", function() {
   var files = [
        'index.php',
        '*.php',
        'sass/css/*.css'
    ];
    browserSync.init(files, {
        proxy: "http://localhost:8888/soltec/",
        notify: false
    });
});
gulp.task('watch', function () {
    gulp.watch("sass/*.scss", ["styles"]);
});

gulp.task('default',function() {
    gulp.watch('sass/*.scss',['sass-watch', 'watch', 'browser-sync']);
});