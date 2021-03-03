const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");
const baseUrl = __dirname;
tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
});

// load the extensions for the global JSON
require("./Src/Infrastructure/Extensions/JSON.extension");
