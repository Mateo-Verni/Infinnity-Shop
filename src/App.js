import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar image="https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png"/>
      <div className="row">
        
        <ItemListContainer></ItemListContainer>
        <CartWidget></CartWidget>
      </div>
    </div>
  );
}

export default App;
