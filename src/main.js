import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p></p>
    <img src='/welcome.png' alt='welcome'/>
  </div>
`

setupCounter(document.querySelector('#counter'))
