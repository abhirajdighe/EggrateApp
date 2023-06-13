import React from 'react'

function Intro() {
    return (
        <div id="myCarousel" class=" container carousel slide" style={{height:"400px"}} data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active carousel-item-start">
                    <img class="bd-placeholder-img" style={{height:"400px"}} width="100%" height="20%" alt="first" src="https://images.pexels.com/photos/2959317/pexels-photo-2959317.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>

                        </div>
                    </div>
                </div>
                <div class="carousel-item active carousel-item-start">
                    <img class="bd-placeholder-img" style={{height:"400px"}} width="100%" height="20%" alt="first" src="https://images.pexels.com/photos/600615/pexels-photo-600615.jpeg" />
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>

                        </div>
                    </div>
                </div>
                <div class="carousel-item active carousel-item-start">
                    <img class="bd-placeholder-img" style={{height:"400px"}} width="100%" height="20%" alt="first" src="https://images.pexels.com/photos/600615/pexels-photo-600615.jpeg" />
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>

                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Intro