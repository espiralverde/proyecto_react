import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { Link } from 'react-router-dom';



const CartWidget = () => {
    
    return (
    <div className="cart-widget">
        <Link to ='/cart'> 
            <h3><FontAwesomeIcon icon={faCartShopping} size="1x" color="white" /></h3>
        </Link>
    </div>
    );
};

export default CartWidget;