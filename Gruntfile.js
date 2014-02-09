module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
 			compile: {
    				options: {
     					baseUrl: "./js",
      					mainConfigFile: "main.js",
      					name: "application.js",
      					out: "optimized.js"
    				}
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
