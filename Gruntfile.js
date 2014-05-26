
 // Generated on 2014-05-08 using generator-angular 0.8.0
 'use strict';

  // # Globbing
  // for performance reasons we're only matching one level down:
  // 'test/spec/{,*/}*.js'
  // use this if you want to recursively match all subfolders:
  // 'test/spec/**/*.js'

  module.exports = function (grunt) {

//    require('load-grunt-tasks')(grunt,{
//      pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
//    }); // ????
    
    require('jit-grunt')(grunt,{
      'karma':'grunt-karma',
//      'coffee':'grunt-contrib-coffee',
//      'less':'grunt-contrib-less',
//      'newer':'grunt-newer',
//      'watch':'grunt-contrib-watch',
      'coverage':'grunt-istanbul-coverage',
//      'jasmine':'grunt-contrib-jasmine',
      protractor:'grunt-protractor-runner',
//      'selenium-webdriver-phantom':'grunt-selenium-webdriver-phantom'
    });
    
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


    //Load tasks
    //grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-contrib-coffee');
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-newer');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-istanbul-coverage');
    //grunt.loadNpmTasks('grunt-contrib-jasmine');
    //grunt.loadNpmTasks('grunt-selenium-webdriver-phantom');

    
    // Define the configuration for all the tasks
    grunt.initConfig({
      // Project settings
      yeoman: {
        // configurable paths
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
      },
      //Run preparing commands
      shell: {
        options: {
          stdout: true
        },
        npm_install: {
          command: 'npm install'    
        },
        font_awesome_fonts: {
          command: 'cp -R bower_components/components-font-awesome/font app/font'
        },
        protractor_webdriver_manager_update: {
          options: {
            stdout: true
          },
          command: require('path').resolve(__dirname, 'node_modules', 'protractor', 'bin', 'webdriver-manager') + ' update'
        }
      },
      // Automatically inject Bower components into the app
      bowerInstall: {
        app: {
          src: ['<%= yeoman.app %>/index.html'],
          ignorePath: '<%= yeoman.app %>/'
        }
      },
     // The actual grunt server settings
     connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
          '.tmp',
          '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
          '.tmp',
          'test/spec',
          '<%= yeoman.app %>'
          ]
        }
      },
      test_e2e: {
        options: {
          port: 9011,
          base: [
          '.tmp',
          'test/e2e',
          '<%= yeoman.app %>'
          ]
        }
      },
      test_midway: {
        options: {
          port: 9111,
          base: [
          '.tmp',
          'test/midway',
          '<%= yeoman.app %>'
          ]
        }
      },
      coverage:{
        options: {
          base : 'test/coverage/html/',
          port: 9002,
          keepalive: true,
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      },
    },
      //E2E test
      protractor:{
        options: {
        },
        all:{
          configFile: 'test-protractor.conf.js',
        },
      },
      selenium_webdriver_phantom: {
        chrome: {
        },
        //stop: {
        //},
        phantom: {
          options: {
            phantom: {
              //path: 'node_modules/phantomjs/bin/phantomjs',
              //args: ['--webdriver', '9999']
            }
          }
        },
      },
      //Coverage
      jasmine: {
       coverage: {
        src: ['app/scripts/**/*.js'],
        options: {
          specs: ['test/**/*.js'],
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'test/coverage/coverage.json',
            report: [
            {type:'html',options: {dir: 'test/coverage/html'}},
            {type:'text',options: {dir: 'test/coverage/text/'}},
            {type:'text-summary'}],
            thresholds: {
              lines: 75,
              statements: 75,
              branches: 75,
              functions: 90
            }
          }
        } 
      }
    },
      // Watches files for changes and runs tasks based on the changed files
      watch: {
        bower: {
          files: ['bower.json'],
          tasks: ['bowerInstall']
        },
        coffee: {
          files: ['<%= yeoman.app %>/coffee_scripts/**/*.coffee',
          'coffee_test/**/*.coffee'],
          tasks: ['newer:coffee:development','newer:coffee:test','newer:coffee:test'],
          options: {
            spawn: false
          }
        },
        less: {
          files: '<%= yeoman.app %>/less_styles/**/*.less',
          tasks: ['newer:less:development'],
          options: {
           spawn: false
         },
       },
       js: {
       files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
       tasks: ['newer:jshint:all'],
       options: {
        livereload: true
      }
    },
        //jsTest: {
        // files: ['test/spec/{,*/}*.js'],
        //  tasks: ['newer:jshint:test'],//, 'karma']
        //},
        styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'newer:autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
      files: ['<%= yeoman.app %>/{,*/}*.html',
    '.tmp/styles/{,*/}*.css',
  '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}']
},
},

less: {
  development: {
   files: [
   {
     expand: true,
     cwd: 'app/less_styles',
     src: ['**/*.less'],
     dest: 'app/styles',
     ext: '.css'
   }
   ]
 },
},
coffee: {
  development: {
    expand: true,
    cwd: 'app/coffee_scripts',
    src: ['**/*.coffee'],
    dest: 'app/scripts',
    ext: '.js',
    options: {
      sourceMap: true,
      sourceMapDir: 'app/tmp_coffee_maps/',
    }
  },
  test: {
    expand: true,
    cwd: 'coffee_test',
    src: ['**/*.coffee'],
    dest: 'test',
    ext: '.js',
    options: {
      //sourceMap: true,
      //sourceMapDir: 'test/tmp_coffee_maps/',
    }
  },
},
      // Make sure code styles are up to par and there are no obvious mistakes
      /// jshint: {
      //   options: {
      //     jshintrc: '.jshintrc',
      //     reporter: require('jshint-stylish')
      //   },
      //   all: [
      //     'Gruntfile.js',
      //     '<%= yeoman.app %>/scripts/{,*/}*.js'
      //   ],
      //   test: {
      //     options: {
      //     jshintrc: 'test/.jshintrc'
      //   },
      //   src: ['test/spec/{,*/}*.js']
      //   }
      // },

      // Empties folders to start fresh
      clean: {
        dist: {
          files: [{
            dot: true,
            src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
            ]
          }]
        },
        server: '.tmp'
      },

      // Add vendor prefixed styles
      autoprefixer: {
        options: {
          browsers: ['last 1 version']
        },
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

      // Renames files for browser caching purposes
      rev: {
        dist: {
          files: {
            src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
      '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= yeoman.dist %>/styles/fonts/*']
    }
  }
},

      // Reads HTML for usemin blocks to enable smart builds that automatically
      // concat, minify and revision files. Creates configurations in memory so
      // additional tasks can operate on them
      useminPrepare: {
        html: '<%= yeoman.app %>/index.html',
        options: {
          dest: '<%= yeoman.dist %>',
          flow: {
            html: {
              steps: {
                js: ['concat', 'uglifyjs'],
                css: ['cssmin']
              },
              post: {}
            }
          }
        }
      },

      // Performs rewrites based on rev and the useminPrepare configuration
      usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
    css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
    options: {
      assetsDirs: ['<%= yeoman.dist %>']
    }
  },

      // The following *-min tasks produce minified files in the dist folder
      cssmin: {
        options: {
          root: '<%= yeoman.app %>'
        }
      },

      imagemin: {
        dist: {
          files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
        src: '{,*/}*.svg',
        dest: '<%= yeoman.dist %>/images'
      }]
    }
  },

  htmlmin: {
    dist: {
      options: {
       collapseWhitespace: true,
       collapseBooleanAttributes: true,
       removeCommentsFromCDATA: true,
       removeOptionalTags: true
     },
     files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
    src: ['*.html', 'views/{,*/}*.html'],
    dest: '<%= yeoman.dist %>'
  }]
}
},

      // ngmin tries to make the code safe for minification automatically by
      // using the Angular long form for dependency injection. It doesn't work on
      // things like resolve or inject so those have to be done manually.
      ngmin: {
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '*.js',
            dest: '.tmp/concat/scripts'
          }]
        }
      },

      // Replace Google CDN references
      cdnify: {
        dist: {
          html: ['<%= yeoman.dist %>/*.html']
        }
      },

      // Copies remaining files to places other tasks can use
      copy: {
        dist: {
          files: [
          {expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
          'views/{,*/}*.html',
        'images/{,*/}*.{webp}',
        'fonts/*'
        ]}, 
        {expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']}
          ]
        },
        styles: {
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

      // Run some tasks in parallel to speed up the build process
      concurrent: {
        compile_new_coffee_less:["newer:coffee:development","newer:less:development"],
        server: [
        'copy:styles'
        ],
        test: [
        'copy:styles'
        ],
        dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
        ]
      },

      // By default, your `index.html`'s <!-- Usemin block --> will take care of
      // minification. These next options are pre-configured if you do not wish
      // to use the Usemin blocks.
      // cssmin: {
      //   dist: {
      //     files: {
      //       '<%= yeoman.dist %>/styles/main.css': [
      //         '.tmp/styles/{,*/}*.css',
      //         '<%= yeoman.app %>/styles/{,*/}*.css'
      //       ]
      //     }
      //   }
      // },
      // uglify: {
      //   dist: {
      //     files: {
      //       '<%= yeoman.dist %>/scripts/scripts.js': [
      //         '<%= yeoman.dist %>/scripts/scripts.js'
      //       ]
      //     }
      //   }
      // },
      // -: {
      //   dist: {}
      // },

      // Test settings
      karma: {
        unit: {
          configFile: 'karma-unit.conf.js',
          singleRun: true,
          autoWatch: false,
        },
        unit_auto: {
          configFile: 'karma-unit.conf.js',
          //logLevel: 'DEBUG'
        },
        e2e: {
          configFile: 'karma-e2e.conf.js',
          singleRun: true,
          autoWatch: false
        },
        e2e_auto: {
          configFile: 'karma-e2e.conf.js',
        },
        midway: {
          configFile: 'karma-midway.conf.js',
          autoWatch: false,
          singleRun: true
        },
        midway_auto: {
          configFile: 'karma-midway.conf.js'
        },
      }
    });

 grunt.registerTask('serve', function (target) {
  if (target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  }

  grunt.task.run([
   //'clean:server',
   'bowerInstall',
   //'concurrent:server',
   'concurrent:compile_new_coffee_less',
   'autoprefixer',
   'connect:livereload',
   'watch'
   ]);
});

 grunt.registerTask('server', function (target) {
  grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
  grunt.task.run(['serve:' + target]);
});


 grunt.registerTask('test', ['connect:test','karma:unit','karma:midway', 'karma:e2e']);
 grunt.registerTask('test:unit', ['karma:unit']);
 grunt.registerTask('test:midway', ['connect:test_midway','karma:midway']);
 //grunt.registerTask('test:e2e', ['connect:test', 'karma:e2e']);
 grunt.registerTask('test:e2e', ['connect:test_e2e', 'test:protractor']);


 grunt.registerTask('autotest', ['autotest:unit']);
 grunt.registerTask('autotest:unit', ['connect:test','karma:unit_auto']);
 grunt.registerTask('autotest:midway', ['connect:test_midway','karma:midway_auto']);
 grunt.registerTask('autotest:e2e', ['connect:test_e2e','karma:e2e_auto']);



 grunt.registerTask('dev:test-unit', [
   //'clean:server',
   'concurrent:compile_new_coffee_less',
   //'concurrent:test',:
   'autotest:unit'
   ]);

 grunt.registerTask('dev:test-e2e', [
   //'clean:server',
   'concurrent:compile_new_coffee_less',
   //'concurrent:test',
   //'autoprefixer',
   'test:protractor'
   //'autotest:e2e' -- DEPREDICATED
   //
   ]);

 grunt.registerTask('dev:coverage',['connect:coverage','jasmine:coverage']);

 grunt.registerTask('ci',[
   //'clean:server',
   'concurrent:compile_new_coffee_less',   
  //'concurrent:test',
  'test:',
  'jasmine:coverage',
  ]);


 grunt.registerTask('install', ['shell:npm_install','bowerInstall','shell:font_awesome_fonts']);


 grunt.registerTask('build', [
   'clean:dist',
   'concurrent:compile_new_coffee_less',
   'bowerInstall',
   'useminPrepare',
   'concurrent:dist',
   'autoprefixer',
   'concat',
   'ngmin',
   'copy:dist',
   'cdnify',
   'cssmin',
   'uglify',
   'rev',
   'usemin',
   'htmlmin'
   ]);



 grunt.registerTask('test:protractor', 
  ['shell:protractor_webdriver_manager_update',
  'selenium_webdriver_phantom', 
  'connect:test_e2e',
  'protractor', 
  //'selenium_webdriver_phantom:stop'
    ]
   );

 grunt.registerTask('dev:test-e2e',['test:protractor']);

 grunt.registerTask('dev:test-midway',['autotest:midway']);


 grunt.registerTask('default', [
   'newer:jshint',
   'test',
   'build',
   'newer:coffee:development',
   'newer:less:development'
   ]);
};
