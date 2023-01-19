import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"
import { useEffect } from "react";
import { useState } from "react";


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);

    const getProducts = fetch('https://pokeapi.co/api/v2/pokemon/');

    useEffect(() => {
        getProducts
            .then(res => res.json())
            .then(data => setProducts(data.results))
           
    }, [])

    console.log(products)
    
    return(
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1}/>
            <ItemList products={ products }/>
        </>
    )
} 

 export default ItemListContainer; 