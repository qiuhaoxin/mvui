/*
*  build mvui.min.css
*/
const gulp=require('gulp');
const gulpCleanCss=require('gulp-clean-css');
const gulpLess=require('gulp-less');
const gulpRename=require('gulp-rename');
const gulpAutoPrefix=require('gulp-autoprefixer');//gulp-autoprefixer

gulp.task('css',function(){
	gulp.src('../src/styles/index.less')
	.pipe(gulpLess())
	.pipe(gulpAutoPrefix({
		browsers:["last 2 versions","ie > 8"]
	}))
	.pipe(gulpCleanCss())//压缩css
	.pipe(gulpRename('mvui.min.css'))//重命名CSS文件
	.pipe(gulp.dest('../dist/styles'));
});


//拷贝字体文件
gulp.task('fonts',function(){
	gulp.src('../src/styles/commons/iconfont/fonts/*.*')
	.pipe(gulp.dest('../dist/styles/fonts'))
})

gulp.task('default',['css',"fonts"]);