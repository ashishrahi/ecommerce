import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../../assets/images/banner.png';
import { Box } from '@mui/material';

const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box >
      <Slider {...settings}>
        <Box>
          <img src={Banner} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Box>
          <img src={Banner} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Box>
          <img src={Banner} alt="Image 3" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Slider>
    </Box>
  );
}

export default ImageCarousel;
