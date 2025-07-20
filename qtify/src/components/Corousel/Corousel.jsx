import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Carousel = ({id, items, renderItem }) => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="relative px-4">
      <LeftNav hidden={atStart} id={id} />
      <RightNav hidden={atEnd} id={id} />

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setAtStart(swiper.isBeginning);
          setAtEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setAtStart(true)}
        onReachEnd={() => setAtEnd(true)}
        onFromEdge={() => {
          setAtStart(false);
          setAtEnd(false);
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-custom-${id}`,
          prevEl: `.swiper-button-prev-custom-${id}`,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
          1280: { slidesPerView: 5, spaceBetween: 0 },
        }}

        
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
