module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      main: {
        files: {
          'assets/app.min.js': [
            'src/javascripts/jquery-1.10.2.min.js',
            'src/javascripts/bootstrap.js',
            'src/javascripts/application.js'
          ]
        }
      }
    },
    cssmin: {
      main: {
        files: {
          'assets/app.min.css': [
            'src/stylesheets/bootstrap.css',
            'src/stylesheetsbootstrap-theme.css',
            'src/stylesheets/application.css'
          ]
        }
      }
    },
    watch: {
      javascripts: {
        files: ['src/javascripts/**/*'],
        tasks: ['uglify']
      },
      stylesheets: {
        files: ['src/stylesheets/**/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['uglify', 'cssmin']);
}
