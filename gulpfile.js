const gulp = require('gulp');
const debug = require('gulp-debug');
const gulpless = require('gulp-less');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const NpmImportPlugin = require('less-plugin-npm-import');

gulp.task('build:less', function () {
    const plugins = [
        autoprefixer(),
        cssnano()
    ];
    return gulp
        .src('styles/*.less')
        .pipe(debug({ title: 'Less files:' }))
        .pipe(gulpless({
            javascriptEnabled: true,
            plugins: [new NpmImportPlugin({ prefix: '~' })]
        }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist'))
});