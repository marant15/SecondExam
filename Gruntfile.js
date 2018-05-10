module.exports = function(grunt){
    
    var config;
    
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

    grunt.registerTask('build', function(con){
        config = grunt.file.readJSON(con);
        grunt.task.run(['generatePage2','generatePage1','generateIndex']);
    });
}