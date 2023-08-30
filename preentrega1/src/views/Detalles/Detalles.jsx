import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import CardItemDetailed from "../../components/CardItemDetailed/CardItemDetailed"

function Detalles() {
    const [item, setItem] = useState([]);
  
    let { id } = useParams();
  
    useEffect(() => {
      axios(`https://api.escuelajs.co/api/v1/products/${id}`).then((json) =>
        setItem(json.data)
      );
    }, [id]);
  
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {item.id ? <CardItemDetailed data={item} /> : null}
      </div>
    );
  };
  
  export default Detalles;
  