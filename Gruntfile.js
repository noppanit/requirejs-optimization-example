module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
 			compile: {
    				options: {
     					baseUrl: "./js",
					paths: {
						'requireLib': 'vendors/requirejs/require',
						'knockout': 'vendors/knockout/knockout-3.0.0',
						'main-call': 'viewmodels/main_call',
						'main-viewmodel': 'viewmodels/main_viewmodel'
					},
      					mainConfigFile: "js/config.js",
      					name: "application",
      					out: "js/optimized.js",
					include: ['requireLib','knockout','main-call','main-viewmodel']
    				}
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
