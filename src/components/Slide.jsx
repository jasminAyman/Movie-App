import React from 'react'
import s1 from '../images/slide/1.jpg'
import s2 from '../images/slide/2.jpg'
import s3 from '../images/slide/3.jpg'
import s4 from '../images/slide/4.png'
import s5 from '../images/slide/5.webp'

function Slide() {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={s1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={s2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={s3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={s4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={s5} className="d-block w-100" alt="..." />
    </div>
  </div> {/* carousel-inner */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
 
  )
}

export default Slide