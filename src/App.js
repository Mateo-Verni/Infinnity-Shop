import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
        <ItemListContainer></ItemListContainer>
        <CartWidget></CartWidget>
      </div>
    </div>
  );
}

export default App;
