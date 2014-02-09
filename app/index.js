'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var VideoGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  app: function () {
    this.mkdir('assets');
    this.mkdir('assets/videos');
    this.mkdir('dist');
    this.mkdir('dist/videos');

    this.template('_package.json', 'package.json');
    this.template('Gruntfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = VideoGenerator;
