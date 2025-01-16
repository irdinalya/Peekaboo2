import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <Header onCategoryChange={handleCategoryChange} />
            <HomePage />
            <ProductList selectedCategory={selectedCategory} />
        </div>
    );
}

export default App;