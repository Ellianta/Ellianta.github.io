var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");

gulp.task("style", function() {
  gulp.src("apps/less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(gulp.dest("apps/css"))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("serve", ["style"], function(){
  browserSync.init({
    server: "./apps"
  });
  gulp.watch("apps/less/**/*.less", ["style"]);
  gulp.watch("apps/*.html").on("change", browserSync.reload);
});
