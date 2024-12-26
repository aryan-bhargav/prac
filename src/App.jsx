import Item from "./components/Item"
import Cart from "./components/Cart"

import { useContext, useEffect, useState } from "react"
import './App.css'
function App() {


  return (
    <>
      <div className="App">
        <div className="products">
          <Item name="Asus Tuf" price="73999" />
          <Item name="Lenovo Legion" price="98999" />
          <Item name="Acer Nitro V" price="65999" />
          <Item name="HP Victus" price="88999" />
        </div>

        <div className="cart">
          <Cart/>
        </div>
      </div>
    </>
  )
}

export default App