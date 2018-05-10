module.exports = function(grunt){
    
    var config = grunt.file.readJSON(grunt.option('con'));

    grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
	  jasmine: {
	    JS: {
	      src: 'js/*.js',
	      options: {
	        specs: 'spec/*.spec.js'
	      }
	    }
	  }
    });

    grunt.registerTask('generateIndex', function(){
        grunt.file.copy('index.html', config.buildFolder + '/index.html',{
            process: function(files){
                return grunt.template.process(files,{
                    data: {
                        pageTitle: config.appName,
                    }
                });
            }
        });
    });

    grunt.registerTask('generatePage1', function(){
        grunt.file.copy('page1.html', config.buildFolder + '/'+config.pageOneName+'.html',{
            process: function(files){
                return grunt.template.process(files,{
                    data: {
                        pageTitle: config.appName,
                    }
                });
            }
        });
    });

    grunt.registerTask('generatePage2', function(){
        grunt.file.copy('page2.html', config.buildFolder + '/'+config.pageTwoName+'.html',{
            process: function(files){
                return grunt.template.process(files,{
                    data: {
                        pageTitle: config.appName,
                    }
                });
            }
        });
    });

    grunt.registerTask('build', ['generatePage2','generatePage1','generateIndex']);
}