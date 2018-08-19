// 引入gulp模块
const gulp = require('gulp')
const jshint = require('gulp-jshint')

// 定义默认任务
gulp.task('jshint', function () {
//  将你的默认的任务代码放在这
  return gulp.src('./src/js/*.js')  // 将指定目录下的文件以数据流的方式导入到gulp内存中
    .pipe(jshint())  // 检查js语法错误
    .pipe(jshint.reporter('default'))  // 使用默认的错误提示
})

gulp.task('default', ['jshint'])  // 异步执行
