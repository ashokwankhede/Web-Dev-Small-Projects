import gulp from "gulp";
const browserSync = require('browser-sync').create();
const gulp = gulp();
// Task to reload the browser
gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// Watch for changes in server-side code
gulp.task('nodemon', function (done) {
  const nodemon = require('nodemon');
  let started = false;

  nodemon({
    script: 'your-server.js',
    watch: ['your-server.js'],
  }).on('start', function () {
    if (!started) {
      done();
      started = true;
      // Start browserSync after the server has started
      browserSync.init({
        proxy: 'http://localhost:3000', // Update with your server's address
        port: 4000, // Update with a port not used by your server
      });
    }
  });

  // Reload the browser when server-side code changes
  gulp.watch(['your-server.js'], gulp.series('reload'));
});

// Default task to start both nodemon and watch for client-side changes
gulp.task('default', gulp.parallel('nodemon'));
