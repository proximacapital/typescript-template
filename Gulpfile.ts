import {
    Build,
    BuildCheckTest,
    BuildTest,
    CheckNode,
    Clean,
    Compile,
    Copy,
    Coverage,
    Demo,
    ESLintCheck,
    ESLintFix,
    ExecTask,
    Lint,
    LintFix,
    MDLintCheck,
    MDLintFix,
    Test,
} from "@proxima-oss/gulp-tasks";
import gulp, { TaskFunctionCallback } from "gulp";

// ***** Base Tasks *****
gulp.task("build", Build);
gulp.task("check-node", CheckNode);
gulp.task("clean", Clean);
gulp.task("compile", Compile);
gulp.task("coverage", Coverage);
gulp.task("copy", Copy);
gulp.task("demo", Demo);
gulp.task("eslint", ESLintCheck);
gulp.task("eslint-fix", ESLintFix);
gulp.task("lint", Lint);
gulp.task("lint-fix", LintFix);
gulp.task("mdlint", MDLintCheck);
gulp.task("mdlint-fix", MDLintFix);
gulp.task("test", Test);

// ***** Custom Tasks *****
gulp.task("start", (done: TaskFunctionCallback): void =>
{
    ExecTask("node Dist/Src/App.js", done);
});

// ***** Aliases *****
gulp.task("tests-all", gulp.task("test"));
gulp.task("build-test", BuildTest);
gulp.task("build-lint-test", BuildCheckTest);
