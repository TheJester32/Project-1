const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function (done) {
     gulp.src('styles/styles.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({ stream: true }));
        done()
});

gulp.task('js', function (done) {
    gulp.src('js/main.js')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/js'))
       .pipe(browserSync.reload({ stream: true }));
       done()
});

gulp.task('js-slider', function (done) {
    gulp.src('js/slider.js')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/js'))
       .pipe(browserSync.reload({ stream: true }));
       done()
});

gulp.task('js-popup', function (done) {
    gulp.src('js/popup.js')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/js'))
       .pipe(browserSync.reload({ stream: true }));
       done()
});

gulp.task('js-hunters', function (done) {
    gulp.src('js/hunters.js')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/js'))
       .pipe(browserSync.reload({ stream: true }));
       done()
});

gulp.task('html', function () {
    return gulp.src('*html')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('start', function (done) {
    browserSync.init({
        server: "build"
    })
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
    gulp.watch('*.html', gulp.series('html'));
    gulp.watch('js/*.js', gulp.series('js'));
    gulp.watch('js/*.js', gulp.series('js-slider'));
    gulp.watch('js/*.js', gulp.series('js-popup'));
    gulp.watch('js/*.js', gulp.series('js-hunters'));
    done()
});

