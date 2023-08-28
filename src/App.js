import User from './components/user';
import './App.css';
import HomeContainer from './containers/homeContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>App components</h1> */}
      {/* <User data={{ name:'anil', age:26}}/> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
