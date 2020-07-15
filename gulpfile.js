var gulp = require('gulp');
// var js_obfuscator = require('gulp-javascript-obfuscator');

var path = {
    src: {
      main: 'src_build/*.js',
      all: ['src/**', '!node_modules']
    },
    dest: {
      main: 'src_build/',
      all: 'src_build/'
    }
};

function copy_src(){
  return gulp.src(path.src.all)
        .pipe(gulp.dest(path.dest.all));
}

// gulp.task('main_obf', ()=>{
//   return gulp.src(path.src.main)
//         .pipe(js_obfuscator())
//         .pipe(gulp.dest(path.dest.main));
// });

gulp.task('copy', ()=>{
  return copy_src();
});

gulp.task('build',gulp.series('copy'));
