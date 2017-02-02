module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('build')
            .pipe(plugins.clean({force: true}));
    };
};