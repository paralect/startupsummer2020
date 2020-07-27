import getData from './getData.js';
import sendData from './sendData.js';

document.getElementById("btn").addEventListener("click", getData);
document.getElementById("mainForm").addEventListener("submit", sendData);