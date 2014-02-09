module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
 			compile: {
    				options: {
     					baseUrl: "./",
      					mainConfigFile: "js/main.js",
      					name: "js/main.js",
      					out: "js/optimized.js"
    				}
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
