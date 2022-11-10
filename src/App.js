import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p > // replace with BakeryItem component
          <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} total={total} setTotal={setTotal} items={items} setItems={setItems}></BakeryItem>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <h3> Total: {total} </h3>
        <h3> Items in Cart: {items.map((item, index) => (
              <div>
                {item}
              </div>
            ))
          }
        </h3>
      </div>
    </div>
  );
}

// function Cart() {
//   const [price, setPrice] = useState(0);
//   const [count, setCount] = useState(0);

//   return (
    
//     <button onClick={() => setCount(price)}></button>
    
//   )
// }

export default App;
