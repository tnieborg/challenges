'usestrict';

module.exports = function(grunt){
    //add config, tasks and plugins

    grunt.initConfig({
        // imports config data from the package.json
        
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            //add task here
                    files: 'sass/**/*.scss',
                    tasks: ['sass'],
                    options: {
                      livereload: true,
                    },
            },
        cssmin: {

        },
        uglify: {

        },
        sass: {
            
        dist: {
            files: {
                'css/style.css': 'sass/style.scss'
            }
        }
    }

    });

    //load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //default task
    grunt.registerTask('default', ['watch', 'cssmin', 'uglify']);
};