import User from './components/user';
import './App.css';
import HomeContainer from './containers/homeContainer';
import HeaderContainer from './containers/headerContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>App components</h1> */}
      {/* <User data={{ name:'anil', age:26}}/> */}
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
