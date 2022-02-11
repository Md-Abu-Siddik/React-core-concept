import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr.Mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: "Siddik",
    job: 'Student'
  }
  var style = {
    color:'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading: {(2+2)*4}</h1>
        <h1 className='' style={style}>Person: {person.name + " " + person.job}</h1>
        <h3 style={{backgroundColor:'cyan',color:'yellow'}}>Person2: {person2.name + " " + person2.job}</h3>
        <p>My first React Paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
