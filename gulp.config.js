module.exports = function() {
    var config = {
        allTs: './app/**/*.ts',
        allSass: './app/**/*.scss',
        typings: './typings/**/*.d.ts',
        tsOutputPath: './app/'
    }
    return config;
}