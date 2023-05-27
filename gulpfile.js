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
    done()
});

