import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import CardItem from "../CardItem/CardItem"
import "./ListItem.css"

function ListItem() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios("https://api.escuelajs.co/api/v1/products").then((json) =>
        setItems(json.data)
      );
    }, []);
  
    return (
      <div className="Cards-List">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/Detalles/${item.id}`}>
                <CardItem data={item}/>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ListItem;