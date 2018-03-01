/*
*  build mvui.min.css
*/
const gulp=require('gulp');
const gulpCleanCss=require('gulp-clean-css');
const gulpLess=require('gulp-less');
const gulpRename=require('gulp-rename');
cosnt gulpAutoPrefix=require('gulp-autoprefixer');

gulp.tash('css',function(){
	gulp.src('../src/styles/index.less')
	.pipe(less())
	.pipe(gulpAutoPrefix({
		browser:['last 2versions','ie>8']
	}))
	.pipe(gulpCleanCss())
	.pipe(gulpRename('mvui.min.css'))
	.pipe(gulp.dest('../dist/styles'));
})


//拷贝字体文件
gulp.task('fonts',function(){
	gulp.src('../src/styles/commons/i')
})




gulp.task('default',['css','fonts']);