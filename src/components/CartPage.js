import React from 'react';
import './CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemove, navigateToPurchase }) {
    const handleQuantityChange = (productId, e) => {
        const newQuantity = parseInt(e.target.value, 10);
        onUpdateQuantity(productId, newQuantity);
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="cart-item">
                                    <td>{item.name}</td>
                                    <td>RM{item.price.toFixed(2)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e)}
                                        />
                                    </td>
                                    <td>RM{(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="purchase-btn" onClick={navigateToPurchase}>Proceed to Purchase</button>
                </>
            )}
        </div>
    );
}

export default CartPage;
