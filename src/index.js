import resume from './resume'
import doT from 'dot'

const tmplText = document.querySelector('#template').innerHTML

const tmplFun = doT.template(tmplText)
const resultText = tmplFun(resume)

document.querySelector('#resume').innerHTML = resultText
