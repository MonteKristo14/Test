const gulp = require("gulp");
const less = require('gulp-less');

gulp.task('task', function() {
    return gulp.src('less/*.less') // Get source files with gulp.src
        .pipe(less()) // Sends it through a gulp plugin
        .pipe(gulp.dest('css'));
});