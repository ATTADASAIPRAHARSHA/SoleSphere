import React from 'react';
import './ShoesReviews.css'; // Import CSS file

const ShoesReviews = () => {
    // Sample data for shoes reviews
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            rating: 4,
            comment: 'Great shoes! Very comfortable.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 5,
            comment: 'Excellent quality and stylish design.'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            rating: 3,
            comment: 'Good shoes, but a bit tight.'
        },
        {
            id: 4,
            name: 'Gavva reddy',
            rating: 4,
            comment: 'Very good.Decent prices !'
        },
        {
            id: 5,
            name: 'Nikhil tuppas',
            rating: 4.5,
            comment: 'Loved it ! Want to buy more .'
        },
    ];

    return (
        <div className="reviews-container"> {/* Add container class */}
            <h2>Shoes Reviews</h2>
            <div className='reviews'>
                {reviews.map(review => (
                    <div key={review.id} className={`review-${review.id}`}>
                        <p className="review-name">Name: {review.name}</p>
                        <p className="review-rating">Rating: {review.rating}/5</p>
                        <p className="review-comment">Comment: {review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoesReviews;
