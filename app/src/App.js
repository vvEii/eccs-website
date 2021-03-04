//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div className="bg-no-repeat bg-center h-5/6" style={{background: `url('https://images.squarespace-cdn.com/content/5d375649e2ffc000016e0aec/1566216421263-WABITDNT9SVT641I149X/20140302_Trade%2B151_0503.jpg?format=2500w&content-type=image%2Fjpeg')` }}>
      asd
      </div> */}
      <div
        className='bg-no-repeat bg-center w-screen h-screen py-8'
        style={{
          backgroundImage:
            'url(https://images.squarespace-cdn.com/content/5d375649e2ffc000016e0aec/1566216421263-WABITDNT9SVT641I149X/20140302_Trade%2B151_0503.jpg?format=2500w&content-type=image%2Fjpeg)',
        }}
      ></div>

      <h1 className='text-lg font-normal'>AAAAGG</h1>
    </div>
  );
}

export default App;
