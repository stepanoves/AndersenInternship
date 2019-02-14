module.exports = (grunt) => {
    const filesList = ['temp/index.js', 'temp/events.js', 'temp/generateUI.js'];
    grunt.initConfig({
      babel: {
        options: {
          presets: ['@babel/preset-env']
        },
        dist: {
          files: {
          'temp/events.js': 'src/events.js',
          'temp/generateUI.js': 'src/generateUI.js',
          'temp/index.js': 'src/index.js',             
          }
        }
      },

      concat: {
          dist: {
            src: filesList,
            dest: 'temp/index.js',
          },
      },

      uglify: {
        options: {
            compress: true,
            mangle: true,
        },
        my_target: {
          files: {
            'dist/index.js': 'temp/index.js'
          }
        }
      },
      
      watch: {
        options: {
            livereload: true,
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['babel', 'concat', 'uglify'],
              },
        }
      },

      connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8000,
            livereload: true,
            base: {
              path: './',
              options: {
                index: 'index.html',
              }
            }
          }
        }
      },

      clean: {
        folder: ['temp'],
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['babel', 'concat', 'uglify', 'clean', 'connect', 'watch']);
};
