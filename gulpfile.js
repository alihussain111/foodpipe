/**
 * Created by ahussain1 on 1/25/2015.
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var stylus = require('gulp-stylus')


//gulp.task('hello',['welcome'],function(){
//    console.log('hello world')
//})

gulp.task('js',function(){
    gulp.src(['/ng/module.js','ng/**/*.js']).pipe(concat('app.js')).pipe(gulp.dest('assets'))

})

gulp.task('css',function(){
    gulp.src('/css/**/*.style').pipe(stylus()).pipe(gulp.dest('assets'))
})
