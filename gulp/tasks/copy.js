
module.exports = function (gulp, plugins) {
        return function () {
            //gulp.src(['lib/underscore.js', 'lib/jquery.js'])
            //    .pipe(gulp.dest('build/libs/'))
            gulp.src('./src/assets/**/*')
                .pipe(gulp.dest('build/assets/'));
            gulp.src('./src/index.html')
                .pipe(gulp.dest('build/'));
        };
    };