import text from './assets/text.txt'

import './scripts/rainbow'
import './styles/main.pcss'

try {
  const studentElem = document.getElementById('student')
  studentElem.innerText = `${text}${STUDENT}`
} catch (err) {
  console.error(err)
}

try {
  const babelElem = document.getElementById('babel')
  const text = undefined ?? 'Babel loader работает!'
  babelElem.innerText = text
} catch (err) {
  console.error(err)
}

