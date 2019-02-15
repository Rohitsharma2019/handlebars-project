module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      cssmin: {

           css_w: {
                // src: ["css/modules/about.css", "css/modules/footer.css", "css/modules/index.css", "css/modules/sidebar.css"],
                src: ["css/modules/*.css"],

                dest: 'css/modules.min.css'
              }
        },

        handlebars: {
            all: {

                files: {

                    // converting all .hbs(handlerbar template file ) into all.js file
                    // you can change the directory according to your requirement
                    "js/all.js": ["templates/*.hbs"]
                }
            }
        },

        watch: {
			/** the grunt is waching if any changes in .hbs files
			 *  if so there will be peform the task hanldebars which does precompile (.hbs to .js)
			 *  **/
            templates : {
			    files: ["templates/*.hbs"],
                tasks: ['handlebars']
            },

            tasks: ['handlebars']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
  //  grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin:css_w', 'handlebars']);
};
