import React from 'react';
import './Banner.scss';

export default function Banner() {
    return (
        <>
            <div id="carouselExampleCaptions" className="col-lg-8 mx-auto my-4 rounded-2 carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item active">
                        <img src="https://www.to-increase.com/hubfs/Imported_Blog_Media/rsz_rsz_discrete_manufacturing-1.jpg" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Hurry up! for discounted price</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.plm.automation.siemens.com/media/global/pt/technical-publishing-imhe-1920x1080_tcm70-3264.jpg" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Select your own choices</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.saint-gobain.com/sites/sgcom.master/files/styles/story_mea/public/industry-plant-by-night.jpg?itok=3f6Ia8Ol" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Big SALE!!! Don't miss it</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
