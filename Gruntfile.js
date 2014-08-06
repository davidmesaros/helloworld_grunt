module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {

        },
        files: {
          'style/style.css' : 'sass/style.scss'
        }
      }
    },
    coffee: {
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'js/application.js':
            [
              'coffee/*.coffee'
            ]
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      coffee: {
        files: '**/*.coffee',
        tasks: ['coffee']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass', 'coffee', 'watch']);
}
