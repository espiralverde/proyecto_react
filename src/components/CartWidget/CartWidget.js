import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';



const CartWidget = () => {
    
    return (
    <div className="cart-widget">
        <h3><FontAwesomeIcon icon={faCartShopping} size="1x" color="white" /></h3>
    </div>
    );
};

export default CartWidget;