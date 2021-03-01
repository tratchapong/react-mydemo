import React, {useState, useEffect}from 'react';
import './App.css';


function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  async function fetchItems() {
    const resp = await fetch('https://fortnite-api.theapinetwork.com/store/get')
    // console.log(resp)
    const out = await resp.json()
    console.log(out.data)
    // console.log(out.data[1].itemId)
    setItems(out.data)
  }
  return (
    <div>
      <h1>Shop Page</h1>
      { items.map( item=> (
        <h1 key={item.itemId}>{item.item.name}</h1>
      )
        )}
    </div>
  );
}

export default Shop;
