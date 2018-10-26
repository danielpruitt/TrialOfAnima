import React from 'react';
import "./CarouselItem.css";

function CarouselItem(props) {
  return (
<div className="carousel-item">
  <img src={props.img} alt={props.name}/>
  <div className="carousel-caption d-none d-md-block">
    <h5>.{props.name}</h5>
    <p>...</p>
  </div>
</div>
  );
}

export default CarouselItem;