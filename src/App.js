import React from 'react'
import './App.css'

const icons = [
  'https://img.icons8.com/?size=100&id=12592&format=png',
  'https://img.icons8.com/?size=64&id=xJd_7yBGvl5J&format=png',
  'https://img.icons8.com/?size=100&id=8305&format=png',
  'https://img.icons8.com/?size=100&id=7hA5Ny9rDAmV&format=png',
  'https://img.icons8.com/?size=100&id=2572&format=png',
  'https://img.icons8.com/?size=100&id=55205&format=png',
  'https://img.icons8.com/?size=100&id=55199&format=png',
  'https://img.icons8.com/?size=100&id=10263&format=png',
  'https://img.icons8.com/?size=100&id=10232&format=png',
  'https://img.icons8.com/?size=100&id=24464&format=png'
];

function App() {
  return (
    <div className="app">
      <div className="left-pane">
        {icons.map((icon, index) => (
          <div className="icon" key={index}>
            <img src={icon} alt={`icon ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="editor">
        <div className="editor-header">
          <div className='elements'>
          <div style={{border: 'solid 1px black', padding:'10px'}}>main.js</div>
          <div className='buttons'>
          <img src='https://img.icons8.com/?size=48&id=111343&format=png' style={{height:'20px', width:'20px', padding:'10px', border: 'solid 1px black'}}></img>
          <img src='https://img.icons8.com/?size=160&id=9YDpJ7oczQMH&format=png' style={{height:'20px', width:'20px', padding:'10px', border: 'solid 1px black'}}></img>
          <button style={{background:'blue', color:'white', padding:'16px 20px 20px 20px'}}>Run</button>
          </div>
          </div>
        </div>
        <div className="editor-content">
          <pre>
            <code>
              {`// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
console.log("Try programiz.pro");`}
            </code>
          </pre>
        </div>
      </div>
      <div className="output-pane">
        <div className="output-header">
          <div style={{border: 'solid 1px black', padding:'10px'}}>Output</div>
          <button>Clear</button>
        </div>
        <div className="output-content"></div>
      </div>
    </div>
  )
}

export default App
