import React from 'react';

function CategoryFilter({ onCategoryChange }) {
    const categories = ['All', 'Barbie', 'Hot Wheels', 'Lego', 'Toy Stuff', 'Squishy', 'Board Game', 'Action Figure', 'Educational Toy'];

    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button key={category} onClick={() => onCategoryChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;