import CartWidget from "../CartWidget/CartWidget";
import "./styles.css"

const NavBar = () => {
    
    const titulo = 'VD BAGS'
    const items = ['Carteras', 'Riñoneras', 'Bandoleras', 'Accesorios']


    return (
        <div className="navBar">

            <div>
                <h2 className="title"> {titulo} </h2>
            </div>

            <div>
                <ul className="list">
                { items.map( (item, i) => <li key={i}> {item} </li> ) }
                </ul>
            </div>

            <div className="carrito">
                <CartWidget/>
            </div>
    
        </div>
    )
}

export default NavBar;