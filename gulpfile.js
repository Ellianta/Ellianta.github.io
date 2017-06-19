var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("style", function() {
  gulp.src("less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
  .pipe(gulp.dest("css"))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("serve", ["style"], function(){
  browserSync.init({
    server: "."
  });
  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});
