import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import CardItem from "../../components/CardItem/CardItem"

const Categoria = () => {
  const [items, setItems] = useState([]);

  console.log("items", items)

  let { categoriasId } = useParams();


  let filteredItems = items.filter((item) => {
    return item.category.name === categoriasId;
  });

  console.log(filteredItems)

  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products").then((json) =>
      setItems(json.data)
    );
  }, []);

  return (
    <div className="Cards-List">
      {filteredItems.map((item) => {
        return (
          <div style={{ margin: 10 }} key={item.id}>
            <Link to={`/Detalles/${item.id}`}>
                <CardItem data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categoria;