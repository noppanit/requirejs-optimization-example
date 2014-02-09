module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
 			compile: {
    				options: {
     					baseUrl: "./js",
					paths: {
						'knockout': 'vendors/knockout/knockout-3.0.0'
					},
      					mainConfigFile: "js/config.js",
      					name: "application",
      					out: "js/optimized.js"
    				}
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
