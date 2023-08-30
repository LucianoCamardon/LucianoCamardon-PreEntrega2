import "./styles.css"

function ItemListContainer({greetings}) {
    return (
        <div className="item-list">
            <div className="welcome">
                <h1>{greetings}</h1>
                <h3>Excelencia en joyería</h3>
            </div>
        </div>
    )
}

export default ItemListContainer