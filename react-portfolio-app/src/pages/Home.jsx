import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const Home = () => {
    const portfolioItems = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: 'path/to/image1.jpg'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'path/to/image2.jpg'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'path/to/image3.jpg'
        }
    ];

    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Here are some of my projects:</p>
            <div className="portfolio-items">
                {portfolioItems.map((item, index) => (
                    <PortfolioItem 
                        key={index} 
                        title={item.title} 
                        description={item.description} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;