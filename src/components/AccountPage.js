import React from 'react';
import './AccountPage.css';

function AccountPage({ user }) {
    if (!user) {
        return (
            <div className="account-page">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="account-page">
            <h2>Welcome, {user.username}</h2>
            <section>
                <h3>Profile Information</h3>
                <p>Username: {user.username}</p>
                <p>Email: {user.email || 'Not available'}</p>
            </section>
            <section>
                <h3>Purchase History</h3>
                <ul>
                    <li>Barbie Dreamhouse - $99.99</li>
                    <li>Race Car - $19.99</li>
                </ul>
            </section>
            <section>
                <h3>Wishlist</h3>
                <ul>
                    <li>Lego Star Wars</li>
                    <li>Plush Bear</li>
                </ul>
            </section>
            <section>
                <h3>Saved Addresses</h3>
                <p>258 Jalan Ampang, Kuala Lumpur, 50450, Malaysia</p>
            </section>
        </div>
    );
}

export default AccountPage;
