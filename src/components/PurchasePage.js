import React, { useState } from 'react';
import './PurchasePage.css';

function PurchasePage({ cart, clearCart }) {
    const [promoCode, setPromoCode] = useState('');
    const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', phone: '' });
    const [billingInfo, setBillingInfo] = useState({ paymentMethod: 'Credit Card' });
    const [deliveryOption, setDeliveryOption] = useState('Standard');

    const calculateDiscount = () => {
        const discounts = {
            peekaboo10: 0.1,
            peekaboo15: 0.15,
            peekaboo20: 0.2,
            peekaboo30: 0.3,
            peekaboo50: 0.5,
            peekaboo80: 0.8,
        };
        return discounts[promoCode.toLowerCase()] || 0;
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = subtotal * calculateDiscount();
        const shipping = deliveryOption === 'Express' ? 10 : 5;
        const tax = (subtotal - discount) * 0.08;
        return { subtotal, discount, shipping, tax, total: subtotal - discount + shipping + tax };
    };

    const { subtotal, discount, shipping, tax, total } = calculateTotal();

    const handlePurchase = () => {
        alert('Purchase successful! Thank you for your order.');
        clearCart();
    };

    return (
        <div className="purchase-page">
            <h2>Order Summary</h2>
            <table className="summary-table">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>RM{item.price.toFixed(2)}</td>
                        <td>RM{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>Apply Promo Code</h3>
            <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
            />

            <h3>Shipping Information</h3>
            <input
                type="text"
                placeholder="Full Name"
                value={shippingInfo.name}
                onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={shippingInfo.phone}
                onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
            />

            <h3>Billing Information</h3>
            <select
                value={billingInfo.paymentMethod}
                onChange={(e) => setBillingInfo({ ...billingInfo, paymentMethod: e.target.value })}
            >
                <option value="Credit Card">Credit Card</option>
                <option value="E-Wallet">E-Wallet</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>

            <h3>Delivery Options</h3>
            <select
                value={deliveryOption}
                onChange={(e) => setDeliveryOption(e.target.value)}
            >
                <option value="Standard">Standard Shipping - RM5</option>
                <option value="Express">Express Shipping - RM10</option>
            </select>

            <h3>Cost Breakdown</h3>
            <p>Subtotal: RM{subtotal.toFixed(2)}</p>
            <p>Discount: -RM{discount.toFixed(2)}</p>
            <p>Shipping: RM{shipping.toFixed(2)}</p>
            <p>Tax: RM{tax.toFixed(2)}</p>
            <p><strong>Total: RM{total.toFixed(2)}</strong></p>

            <button className="confirm-btn" onClick={handlePurchase}>Review and Confirm Purchase</button>
        </div>
    );
}

export default PurchasePage;
