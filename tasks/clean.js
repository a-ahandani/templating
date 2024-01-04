'use strict';

import gulp from "gulp";
import {deleteAsync} from "del";
import { paths } from '../gulpfile.js';


// -------------------------------------
//   Task: clean
// -------------------------------------

gulp.task('clean', function () {
  return deleteAsync(paths.dist);
});
