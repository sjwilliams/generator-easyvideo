// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function(grunt) {

    // paths used in our tasks
    var tmpFolder = '.tmp/';

    // src assets
    var srcVideos = 'assets/videos/';

    // publish location
    var targetVideos = 'dist/videos/',
        targetVideoPosters = targetVideos;

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        clean: {
            tmp: {
                expand: true,
                cwd: tmpFolder,
                src: ['**.*']
            },
            responsiveVideosTarget: {
                expand: true,
                cwd: tmpFolder,
                src: ['*.{mov,mp4,webm}']
            }
        },
        imagemin: {
            videoPosters: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: tmpFolder,
                    src: ['*.{jpg,gif,png}'],
                    dest: targetVideoPosters
                }]
            }
        },

        responsive_videos: {
            projectVideos: {
                options: {
                    sizes: [{
                        width: 640,
                        poster: true
                    }, {
                        width: 900,
                        poster: true
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{mov,mp4}'],
                    cwd: srcVideos,
                    dest: tmpFolder
                }]
            }
        },

        copy: {
            projectVideos: {
                files: [{
                    expand: true,
                    cwd: tmpFolder,
                    src: ['*.{webm,mp4}'],
                    dest: targetVideos
                }]
            }
        },
    });

    grunt.registerTask('videos', 'Generate videos from source files in ' + srcVideos, [
        'clean:tmp',
        'responsive_videos:projectVideos',
        'copy:projectVideos',
        'imagemin:videoPosters',
        'clean:tmp'
    ]);

    // Default task.
    grunt.registerTask('default', ['videos']);
};
