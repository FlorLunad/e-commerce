import CartWidget from "./CartWidget";


const NavBar = () => {
    
    const titulo= 'VD BAGS'
    
    return (
        <div className="navbar">
        
        <h2 className="titulo">{titulo}</h2>

        <div className="carrito">
        <li className="lista">
            <ul className="item"><a href="NavBar.js">Carteras</a></ul>
            <ul className="item"><a href="NavBar.js">Riñoneras</a></ul>
            <ul className="item"><a href="NavBar.js">Bandoleras</a></ul>
            <ul className="item"><a href="NavBar.js">Accesorios</a></ul>
        </li>

        <CartWidget/>
        </div>
        
        </div>
    )
}

export default NavBar;