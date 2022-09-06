import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './components/NavBar';
import ListItem from './components/ListItem';

function App() {
  const [content, setContent] = useState([
    {
      title: 'Sneakers for Men',
      description: 'Zapatillas Nike Air Force 1 Gore Tex',
      quantity: 0
    },
    {
      title: 'Sneakers for Men',
      description: 'Zapatillas Nike Air Force 1 07',
      quantity: 0
    },
    {
      title: 'Sneakers for Men',
      description: 'Zapatillas Nike Air Max Furyosa',
      quantity: 0
    }
    
  ])
  // ES6 
  // const [ALGO] = [1,2,3,4,5].map((elemento) => {})
  // [1,2,3,4,5].filter(() => {})
  // ALGO.prop ==> propiedad prop del objeto ALGO
  // ALGO.method() ==> metodo method del objeto ALGO


  const handleAddCart = (itemTitle) => {
    const newContent = content.map(elemento => {
      if(elemento.title === itemTitle) {
        elemento.quantity++
        return elemento
      }
      return elemento
    })

    setContent(newContent)
  }

  const handleSubstractCart = (itemTitle) => {
    const newContent = content.map(elemento => {
      if(elemento.title === itemTitle) {
        if(elemento.quantity === 0) return
        elemento.quantity--
        return elemento
      }
      return elemento
    })

    setContent(newContent)
  }

  return (
    <div className="App">
      <NavBar quantity={content[0].quantity + content[1].quantity } />
       <div className="row">
        {content.map((elemento) => (
          <div className="col-4">
            <ListItem 
              title={elemento.title}
              description={elemento.description}
              itemQuantity={elemento.quantity}
              handleAddClick={() => handleAddCart(elemento.title)}
              handleSubClick={() => handleSubstractCart(elemento.title)}
              />
          </div>
        ))}
          {/* <div className="col-4">
            <ListItem 
              title="Zapatilla"
              description='Alta shanta'
              itemQuantity={cartQuantity}
              handleAddClick={handleAddCart}
              handleSubClick={handleSubstractCart}
              />
          </div>
          <div className="col-4">
            <ListItem 
              title="Remera"
              description='ASd asd'
              itemQuantity={cartQuantity}
              handleAddClick={handleAddCart}
              handleSubClick={handleSubstractCart}
              />
          </div> */}
       </div>
    </div>
  );
}

export default App;
