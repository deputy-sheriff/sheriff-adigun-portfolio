import React from 'react';

const PortfolioItem = ({ title, description, image, liveUrl }) => (
    <div className="portfolio-item">
        <img src={image} alt={title} className="portfolio-image" />
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-description">{description}</p>
        {liveUrl && (
            <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="view-live-btn"
            >
                View Live
            </a>
        )}
    </div>
);

export default PortfolioItem;