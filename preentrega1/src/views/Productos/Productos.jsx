import React from "react"
import ListItem from "../../components/ListItem/ListItem"

function ListaProductos () {
  return (
    <div>
      <h2 style={{display: "flex", justifyContent: "center"}}>Todos nuestros productos!</h2>
      <ListItem/>
    </div>
  )
}

export default ListaProductos