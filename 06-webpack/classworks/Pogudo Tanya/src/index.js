/* eslint-disable no-console */
import text from './assets/text.txt';

import './scripts/rainbow';
import './styles/main.pcss';



try {
  const studentElem = document.getElementById('student');
  // eslint-disable-next-line no-undef
  studentElem.innerText = `${text}${STUDENT}`;
} catch (err) {
  console.error(err);
}

try {
  const babelElem = document.getElementById('babel');
  // eslint-disable-next-line
  const text = undefined ?? 'Babel loader работает!'
  babelElem.innerText = text;
} catch (err) {
  console.error(err);
}
