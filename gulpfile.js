const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp');

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
}

function cleanDist() {
    return del('dist');
}

function images() {
    return src('src/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(dest('dist/img'));
}

function styles() {
    return src('src/sass/style.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}

function build() {
    return src([
            'src/css/style.min.css',
            'src/fonts/**/*',
            'src/js/*.js',
            'src/*.html'
        ], {
            base: 'src'
        })
        .pipe(dest('dist'));
}

function watching() {
    watch(['src/sass/**/*.sass'], styles);
    watch(['src/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, browsersync, watching);