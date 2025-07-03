module.exports = function(grunt) {
  // Configuração das tarefas
  grunt.initConfig({
    less: {
      development: {
        files: {
          'dist/styles.css': 'src/styles.less'
        }
      }
    },
    uglify: {
      build: {
        files: {
          'dist/app.min.js': ['src/app.js']
        }
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefa padrão
  grunt.registerTask('default', ['less', 'uglify']);
};
