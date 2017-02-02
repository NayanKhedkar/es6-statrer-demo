module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/sass/*.{sass,scss}')
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer())
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename('style.css'))
            .pipe(gulp.dest('build'));
    };
};
