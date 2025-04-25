import Slider from "react-slick";
import "../styles/photoGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const PhotoGallery = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const gallery1 = [
    { img: "/1.png" },
    { img: "/2.png" },
    { img: "/3.png" },
    { img: "/4.png" },
    { img: "/5.png" },
    { img: "/6.png" },
    { img: "/7.png" },
    { img: "/8.png" },
    { img: "/9.png" },
    { img: "/10.png" },
    { img: "/11.png" },
    { img: "/12.png" },
    { img: "/13.png" },
    { img: "/14.png" },
    { img: "/15.png" },
    { img: "/16.png" },
    { img: "/17.png" },
    { img: "/18.png" },
    { img: "/19.png" },
    { img: "/20.png" },
    { img: "/21.png" },
    { img: "/22.png" },
    { img: "/54.png" },
    { img: "/55.png" },
    { img: "/56.png" },
    { img: "/57.png" },
  ];
  const gallery2 = [
    { img: "/25.png" },
    { img: "/26.png" },
    { img: "/27.png" },
    { img: "/28.png" },
    { img: "/29.png" },
    { img: "/30.png" },
    { img: "/31.png" },
    { img: "/32.png" },
    { img: "/33.png" },
    { img: "/34.png" },
    { img: "/35.png" },
    { img: "/36.png" },
    { img: "/37.png" },
    { img: "/38.png" },
    { img: "/38.png" },
    { img: "/40.png" },
    { img: "/41.png" },
    { img: "/42.png" },
    { img: "/43.png" },
    { img: "/44.png" },
    { img: "/45.png" },
    { img: "/46.png" },
    { img: "/47.png" },
    { img: "/48.png" },
    { img: "/49.png" },
    { img: "/50.png" },
    { img: "/51.png" },
    { img: "/52.png" },
    { img: "/53.png" },
  ];
  return (
    <div className="photo-gallery-container">
      <h2
        className={`photo-gallery-title animate__animated ${
          inView ? "animate__fadeInDown" : ""
        }`}
        ref={ref}
      >
        Nuestra galería
      </h2>
      <Slider {...settings}>
        {gallery1.map((item, index) => (
          <div key={index} className="photo-gallery-slide">
            <img src={item.img} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {gallery2.map((item, index) => (
          <div key={index} className="photo-gallery-slide">
            <img src={item.img} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
