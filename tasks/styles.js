'use strict';

import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import tailwindcss from 'tailwindcss';
import postcss from 'gulp-postcss';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import browsersync from 'browser-sync';
import autoprefixer from 'autoprefixer';
import { config, paths } from '../gulpfile.js';
import sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);

// -------------------------------------
//   Task: styles
// -------------------------------------

gulp.task('styles', function () {
  return gulp.src(paths.styles.src)
    .pipe(plumber(config.plumber))
    .pipe(gulpIf(!config.production, sourcemaps.init()))
    .pipe(postcss([tailwindcss(), autoprefixer()]))
    .pipe(sass({
      includePaths: ['node_modules'],
      precision: 7,
    }, false))
    .pipe(gulpIf(config.production, cleanCSS()))
    .pipe(gulpIf(!config.production, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browsersync.stream());
});
