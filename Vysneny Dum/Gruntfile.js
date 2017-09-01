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
            target: {
                files: [{
                  expand: true,
                  cwd: 'css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css',
                  ext: '.min.css'
                }]
              }
        },
        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'js/slideshow.min.js': ['js/slideshow.js']
              }
            }
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
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('min', ['cssmin', 'uglify']);
};