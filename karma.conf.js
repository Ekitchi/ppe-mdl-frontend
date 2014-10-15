module.exports = function(config) {
	config.set({
		basePath : '',
		frameworks : ['jasmine'],

		files : [
			'src/js/*.js',
			'tests/unit/*.js'
		],

		exclude : [],

		preprocessors : {
			'tests/unit/*js' : 'coverage'
		},

		reporters : ['progress', 'coverage'],

		port: 9876,

		colors : true,

		logLevel : config.LOG_INFO,

		autoWatch : false,

		browsers : ['PhantomJS'],

		singleRun : true
	});
};