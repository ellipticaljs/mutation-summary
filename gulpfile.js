var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_NAME='elliptical.mutation.summary.js',
    MIN_NAME='elliptical.mutation.summary.min.js',
    REPO_NAME='elliptical mutation summary',
    MS='./node_modules/jquery-mutation-summary/dist/mutation.summary.js',
    LIB='./lib/observer.js',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|minify"');
});

gulp.task('build',function(){
    fileStream(MS,DIST);
    concatFileStream(LIB,DIST,BUILD_NAME);
});

gulp.task('minify',function(){
    minFileStream(MS,DIST,'mutation.summary.min.js');
    minFileStream(LIB,DIST,MIN_NAME);
});

function srcStream(src){
    if(src===undefined) src=BUILD_JSON;
    return gulp.src(src);
}

function concatStream(name,src){
    if(src===undefined) src=BUILD_JSON;
    return srcStream(src)
        .pipe(concat(name))
}

function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}