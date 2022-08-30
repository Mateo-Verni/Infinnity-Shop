
import Main from './components/Main';
import Basket from './components/Basket';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
