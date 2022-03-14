const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync').create()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

gulp.task('gulp_nodemon', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html css',
    env: { NODE_ENV: 'development' }
  })
})

gulp.task('assets', function () {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')))
      }
      resolve()
    })
  })
})

gulp.task('sync', function () {
  browserSync.init({
    port: 3002,
    proxy: 'http://localhost:3000/',
    ui: { port: 3003 },
    reloadDelay: 1000
  })
  gulp
    .watch(['./**/*.js', './**/*.html', './**/*.css'])
    .on('change', browserSync.reload)
})

exports.dev = gulp.parallel(['gulp_nodemon', 'sync'])
exports.build = gulp.series(['gulp_nodemon', 'assets'])
