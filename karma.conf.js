module.exports = function(config) {
  config.set({

    // Base path that will be used to resolve all patterms (eg. files,
    // exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // List of files to exclude
    exclude: [

    ],

    // preprocess matching files before serving them to the browser
    // available preprocesors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // availalbe reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable/disable watching file and executing tests whenever any file
    // changes
    autoWatch: false,

    // Start these browsers
    // available browser launchers:
    // http://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continues Integration mdoe
    // if true, karma captures browsers, runs the tests, and exits
    singleRun: true
  });
};
