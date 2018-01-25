const jsdoc2md = require('jsdoc-to-markdown')
const FS = require('fs-extra')
const path = require('path')

jsdoc2md.render({ files: 'src/url/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/url.md'),v)
})

jsdoc2md.render({ files: 'src/device/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/device.md'),v)
})

jsdoc2md.render({ files: 'src/dom/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/dom.md'),v)
})

jsdoc2md.render({ files: 'src/reg/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/reg.md'),v)
})
