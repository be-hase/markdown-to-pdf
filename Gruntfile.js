module.exports = function(grunt) {
    var split, markdownpdfOptions;
    split = require('split');
    markdownpdfOptions = {
        cssPath: __dirname + '/assets/styles/GitHub2.css',
        preProcessMd: function() {
            return split(function (line) {
                return line.replace(/{{assets}}/g, __dirname + '/assets') + '\n';
            });
        }
    };

    grunt.initConfig({
        markdownpdf: {
            all: {
                options: markdownpdfOptions,
                files: [
                    {
                        expand: true,
                        src: 'markdown/*.md',
                        dest: 'pdf/',
                        rename: function(dest, src) {
                            return dest;
                        }
                    }
                ]
            }
        },
        watch: {
            all: {
                files: ["markdown/*.md"],
                tasks: ["markdownpdf:all"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['markdownpdf']);
};