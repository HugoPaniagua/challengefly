import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import BannerContent from './BannerContent'

const items = [
  {
    src: 'https://wanderlust.com.ar/wp-content/uploads/2018/10/salta-northwest.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://descubrirturismo.com/wp-content/uploads/2019/04/photo-1546863340-7e4e97e46f42.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://www.savarinturismo.com.ar/wp-content/uploads/2017/07/bariloche-savarin-turismo-hotel-llao-llao.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const CarouselHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel" //Tamaño del Carrousel
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div style={{
          backgroundImage: `url("${item.src}")`
        }} className="carouselImg">
          <BannerContent /> 
          {/* Contenido del Carrousel */}
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      pause={'hover', false} 
      //quito la pause de hover
      // interval={3000} 
      //intervalo de tiempo entre slides
    >
      
      {/* le quité el slide de pie (elemento)
      , las arrows 'direction' (propiedad carousel control) */}
      {slides}
      
      <CarouselControl directionText="Previous" onClickHandler={previous} />
      <CarouselControl directionText="Next" onClickHandler={next} />
    </Carousel>
    
  </>
  );
}

export default CarouselHome;
