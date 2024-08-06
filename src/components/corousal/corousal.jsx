
import React, { useState, useEffect } from 'react';
import banner1 from '../../images/banner.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner1.png';

export const Carousal = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <img className="d-block w-100 mx-auto img-fluid" src={banner1} alt="First slide" style={{ maxHeight: "550px" }} />
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <img className="d-block w-100 mx-auto img-fluid" src={banner2} alt="Second slide" style={{ maxHeight: "550px" }} />
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <img className="d-block w-100 mx-auto img-fluid" src={banner3} alt="Third slide" style={{ maxHeight: "550px" }} />
                </div>
            </div>
        </div>
    );
};

export default Carousal;
