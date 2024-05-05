import "./_index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

// import image from the local file
import sliderFood__1 from "../../../assets/slider/sliderFood__1.png";
import sliderFood__2 from "../../../assets/slider/sliderFood__2.png";
import sliderFood__3 from "../../../assets/slider/sliderFood__3.png";
import sliderFood__4 from "../../../assets/slider/sliderFood__4.png";
import sliderFood__5 from "../../../assets/slider/sliderFood__5.png";
import sliderFood__6 from "../../../assets/slider/sliderFood__6.png";
const SliderPage = () => {
  const products = [
    {
      productsImg: sliderFood__1,
      title: "Chicken Tikka Masala with Naan",
      description:
        "Spicy chicken tikka cooked in a creamy tomato sauce, served with freshly baked naan bread.",
      price: "$12.99",
    },
    {
      productsImg: sliderFood__2,
      title: "Vegetable Pad Thai",
      description:
        "Stir-fried rice noodles with tofu, bean sprouts, and vegetables, seasoned with tamarind sauce and peanuts.",
      price: "$10.49",
    },
    {
      productsImg: sliderFood__3,
      title: "Margherita Pizza",
      description:
        "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
      price: "$8.99",
    },
    {
      productsImg: sliderFood__4,
      title: "Sushi Platter",
      description:
        "Assorted sushi rolls including California rolls, tuna rolls, and salmon nigiri, served with soy sauce and wasabi.",
      price: "$15.99",
    },
    {
      productsImg: sliderFood__5,
      title: "BBQ Pulled Pork Sandwich",
      description:
        "Slow-cooked pulled pork smothered in barbecue sauce, served on a toasted bun with coleslaw.",
      price: "$9.99",
    },
    {
      productsImg: sliderFood__6,
      title: "Mushroom Risotto",
      description:
        "Creamy Arborio rice cooked with mushrooms, onions, garlic, and Parmesan cheese.",
      price: "$11.49",
    },
    {
      productsImg: sliderFood__1,
      title: "Shrimp Tacos",
      description:
        "Grilled shrimp served in warm corn tortillas with shredded cabbage, salsa, and lime wedges.",
      price: "$13.99",
    },
    {
      productsImg: sliderFood__2,
      title: "Beef Pho",
      description:
        "Vietnamese noodle soup with thinly sliced beef, rice noodles, bean sprouts, and fresh herbs.",
      price: "$10.99",
    },
    {
      productsImg: sliderFood__3,
      title: "Falafel Wrap",
      description:
        "Homemade falafel balls wrapped in a warm pita with lettuce, tomatoes, cucumbers, and tahini sauce.",
      price: "$7.99",
    },
    {
      productsImg: sliderFood__4,
      title: "Chocolate Lava Cake",
      description:
        "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.",
      price: "$6.49",
    },
  ];

  return (
    <div className="slider__wrapper">
      <h1 className="slider__title">Our All Products</h1>
      <p className="slider__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        sapiente eos libero! Illum, tenetur nesciunt!
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 2,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="slider__item">
              <img src={product?.productsImg} />
              <div className="slider--item__content">
                <h4 className="slider--item__title">{product?.title}</h4>
                <p className="slider--item__desc">{product?.description}</p>
                <p className="slider--item__price">{product?.price}</p>
                <div className="slider--item__ratings__container">
                  <FaStar size={22} />
                  <FaStar size={22} />
                  <FaStar size={22} />
                  <FaRegStar size={22} />
                  <FaRegStar size={22} />
                </div>
              </div>

              <button className="slider--item__button">Add to Card</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPage;
