import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'e122710e';
  const APP_KEY = 'f4664c1d4e1e7eabaca95357ed781707';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
