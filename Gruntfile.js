'use strict';

var request = require('request');

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var reloadPort = 35729, files;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        develop: {
            server: {
                file: 'src/app.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/less',
                        src: ['*.less'],
                        dest: 'src/css',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: reloadPort
            },
            server: {
                files: [
                    'src/app.js',
                ],
                tasks: ['develop', 'delayed-livereload']
            },
            html: {
                files: ['src/*.html'],
                options: {
                    livereload: reloadPort
                }
            },
            js: {
                files: ['src/js/*.js'],
                options: {
                    livereload: reloadPort
                }
            },
            styles: {
                files: ['src/less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: reloadPort
                }
            }
        },
    });

    grunt.config.requires('watch.server.files');
    files = grunt.config('watch.server.files');
    files = grunt.file.expand(files);

    grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
        var done = this.async();
        setTimeout(function () {
            request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
                var reloaded = !err && res.statusCode === 200;
                if (reloaded) {
                    grunt.log.ok('Delayed live reload successful.');
                } else {
                    grunt.log.error('Unable to make a delayed live reload.');
                }
                done(reloaded);
            });
        }, 500);
    });

    //grunt.registerTask('install', ['bower', 'less']);
    grunt.registerTask('start', ['less', 'develop', 'watch']);
};
