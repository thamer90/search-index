module.exports = function(grunt){

  // Configure main project settings
  grunt.initConfig({

      // Basic settings and info about our plugins
      pkg: grunt.file.readJSON('package.json'),

      cssmin: {
        my_target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      },

      uglify: {
          files: {
              src: 'js/app.js',  // source files mask
              dest: 'js/',    // destination folder
              expand: true,    // allow dynamic building
              flatten: true,   // remove all unnecessary nesting
              ext: '.min.js'   // replace .js to .min.js
          }
      },

      watch: {
          js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
          css:  { files: 'css/*.css', tasks: [ 'cssmin' ] },
      }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Execute task
  grunt.registerTask('default', ['cssmin', 'uglify', 'watch']);

};
