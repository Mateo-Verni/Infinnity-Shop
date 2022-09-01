import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
      <hr />
      <Navbar image="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
      <hr />
      <NavBar/>
      <div className="row">
        <ItemListContainer></ItemListContainer>
        <CartWidget></CartWidget>
      </div>
    </div>
  );
}

export default App;
