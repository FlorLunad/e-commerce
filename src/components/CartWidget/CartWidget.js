import { HiShoppingCart } from 'react-icons/hi';

const CartWidget = ()=>{
    
    const numero = 8;
    
    return(
        <>
            <HiShoppingCart/>
                {numero}
        </>
    )
}

export default CartWidget;