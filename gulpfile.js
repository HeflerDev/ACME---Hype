var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync").create();

gulp.task("gulp_nodemon", function () {
  nodemon({
    script: "server.js",
    ext: "js html css",
    env: { NODE_ENV: "development" },
  });
});

gulp.task("sync", function () {
  browserSync.init({
    port: 3002,
    proxy: "http://localhost:3000/",
    ui: { port: 3003 },
    reloadDelay: 1000
  });
  gulp
    .watch(["./**/*.js", "./**/*.html", "./**/*.css"])
    .on("change", browserSync.reload);
});

exports.build = gulp.parallel(["gulp_nodemon", "sync"]);
