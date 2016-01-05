'use strict';
module.exports = function(grunt) {
    
    grunt.initConfig({
        
        assemble: {
          options: {
			  layoutdir: 'src/layouts',
			  flatten: true
          },
          myproject: {
            options: {
				layout: 'default.hbs',
				partials: 'src/partials/*.hbs'
            },
            files: {
              'dest/': ["src/pages/**/*.hbs" ]
            }
          }
        }
    });
    
    grunt.loadNpmTasks('assemble');
    grunt.registerTask('default', ['assemble']);
};