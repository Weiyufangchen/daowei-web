// 引入gulp模块
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const babel = require('gulp-babel')

/*
任务如果指定了 return 那么这个任务就是个异步的任务
  如果没有指定  return 那么这个任务就是个同步的任务
*/

// 定义默认任务
gulp.task('jshint', function () {
//  将你的默认的任务代码放在这
  return gulp.src('./src/js/*.js')  // 将指定目录下的文件以数据流的方式导入到gulp内存中
    .pipe(jshint({esversion: 6}))  // 检查js语法错误
    .pipe(jshint.reporter('default'))  // 使用默认的错误提示
})

gulp.task('babel', ['jshint'], function () {  // 中间数组的作用：先执行数组中的任务，再执行本身的任务
  return gulp.src('./src/js/*.js')  // 千万记得加return
    .pipe(babel({  // 语法转换 es6 --> es5
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'))  // 将gulp内存中的数据流输出到指定目录下
})

gulp.task('default', ['babel'])  // 异步执行
