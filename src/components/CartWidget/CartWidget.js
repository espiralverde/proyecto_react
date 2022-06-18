import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { Link } from 'react-router-dom';
import React from 'react'

const CartWidget = () => {

    return (
        <div className="cart-widget">
            <Link to ='/cart'> 
                <h3><FontAwesomeIcon icon={faCartShopping} size="1x" color="white" /></h3>
            </Link>
        </div>
    );
}

export default CartWidget;