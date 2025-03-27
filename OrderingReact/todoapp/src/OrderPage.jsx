import React, { useState } from 'react';
import './index.css'; // Ensure you have this file

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    return (
        <div className="container">
            {/* Left Side - Input Section */}
            <div className="input-section">
                <h2>Order Details</h2>
                
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <label>Quantity:</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />

                <label>Delivery Instructions:</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter delivery instructions"/>

                <label>Payment Method:</label>
                <select value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>

                <label>Shipping:</label>
                <div className="shipping-options">
                    <label>
                        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={(e) => setShipping(e.target.value)} />
                        Pick Up
                    </label>

                    <label>
                        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={(e) => setShipping(e.target.value)} />
                        Delivery
                    </label>
                </div>
            </div>

            {/* Right Side - Confirmation Section */}
            <div className="confirmation-section">
                <h2>Confirmation</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Comment:</strong> {comment}</p>
                <p><strong>Payment:</strong> {payment}</p>
                <p><strong>Shipping:</strong> {shipping}</p>
            </div>
        </div>
    );
}

export default MyComponent;
