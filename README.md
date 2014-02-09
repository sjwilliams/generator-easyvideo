# generator-easyvideo 

FFMPEG-based encoding work flow to generate videos in multiple sizes and codecs using [Yeoman](http://yeoman.io/) and [Grunt](http://gruntjs.com/).

## Software Dependencies

### FFMPEG

This encoder requries FFMPEG. You may need to compile in support for your desired codec. For libx264 and libvpx, the libraries that generate .mp4 and .webm files, you can install them like so with Homebrew:

```
$ brew install ffmpeg --with-libvorbis --with-nonfree --with-gpl --with-libvpx --with-pthreads --with-libx264 --with-libfaac --with-theora --with-libogg
```

### Yeoman and generator-easyvideo

To install Yeoman from npm, run:

```
$ npm install -g yo
```

To install generator-easyvideo from npm, run:

```
$ npm install -g generator-easyvideo
```

## Configure And Run

Instantiate the generator from within your project folder

```
$ yo video
```

Place source files in the newly created `assets/videos/` and run:

```
$ grunt videos
```

Any videos in the `assets/videos/` will be generated in the sizes listed in the `responsive_videos` task in Grunt.js and output to `dist/videos/`. You may check the default encode settings, or update the output sizes, codecs and poster option by following the instructions for [grunt-responsive-videos](https://github.com/sjwilliams/grunt-responsive-videos).
    
## Release History

*0.0.1*

* Initial release

## License

MIT