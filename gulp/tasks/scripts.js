module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/js/**/*.js')
            .pipe(plugins.babel({presets: ['es2015']}))
            .pipe(plugins.concat('scripts.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('build'));
    };
};
