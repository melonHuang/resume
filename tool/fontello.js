var path = require('path'),
  fontelloUpdate = require('fontello-update')

var configFile = './src/fontello/config.json'
var fontFile = './src/fontello/font'
var cssFile = './src/fontello/css'

var command = process.argv[2] || 'update'

switch(command) {
  case 'update':
    update()
    break
  case 'edit':
    edit()
    break;
}

function update() {
  fontelloUpdate({
    config: configFile,
    fonts: fontFile,
    css: cssFile
  })
}

function edit() {
  fontelloUpdate({
    config: configFile,
    open: true
  })
}
