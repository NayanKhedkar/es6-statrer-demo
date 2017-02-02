const gulp=require('gulp');
const plugins = require("gulp-load-plugins")();
function getTask(task) {
    return require('./gulp/tasks/'+task)(gulp,plugins);

}
gulp.task('scripts', getTask('scripts'));
gulp.task('sass', getTask('sass'));
gulp.task('clean', getTask('clean'));
gulp.task('copy', getTask('copy'));
//gulp.task('watch',getTask('watch'));
gulp.task('build',getTask('build'));
gulp.task('default', ['scripts','sass','copy'], function () {
    //gulp.watch('src/js/**/*.js', ['script']);
    //gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});